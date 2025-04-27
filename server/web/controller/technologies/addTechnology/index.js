const Technology = require("../../../../models/technologies");

const addTechnology = async (req, res) => {
  try {
    const { userId } = req.params;
    const { technologies } = req.body;

    // Validate userId
    if (!userId || userId.trim() === '') {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    // Validate technologies array
    if (!technologies || !Array.isArray(technologies) || technologies.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Technologies array is required and cannot be empty"
      });
    }

    // Validate each technology entry
    for (const tech of technologies) {
      if (!tech.name) {
        return res.status(400).json({
          success: false,
          message: "Technology name is required"
        });
      }

      if (!tech.category) {
        return res.status(400).json({
          success: false,
          message: "Technology category is required"
        });
      }

      // Validate category enum values
      const validCategories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Languages'];
      if (!validCategories.includes(tech.category)) {
        return res.status(400).json({
          success: false,
          message: `Invalid category. Must be one of: ${validCategories.join(', ')}`
        });
      }

      // Validate proficiency enum values if provided
      if (tech.proficiency) {
        const validProficiencies = ['Beginner', 'Intermediate', 'Advanced'];
        if (!validProficiencies.includes(tech.proficiency)) {
          return res.status(400).json({
            success: false,
            message: `Invalid proficiency level. Must be one of: ${validProficiencies.join(', ')}`
          });
        }
      }
    }

    // Find existing technology document for user or create new one
    let userTechnology = await Technology.findOne({ userId: userId });

    if (userTechnology) {
      userTechnology.technologies.push(...technologies);
      await userTechnology.save();
    } else {
      userTechnology = await Technology.create({
        userId: userId,
        technologies: technologies
      });
    }

    return res.status(201).json({
      success: true,
      message: "Technologies added successfully",
      data: userTechnology
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        error: error.message
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error while adding technologies",
      error: error.message
    });
  }
};

module.exports = addTechnology;
