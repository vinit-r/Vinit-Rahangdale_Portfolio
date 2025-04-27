const Experience = require("../../../../models/experience");

const addExperience = async (req, res) => {
  try {
    const { userId } = req.params;
    const { experience } = req.body;

    // Validate userId
    if (!userId || userId.trim() === '') {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    // Validate each experience entry
    for (const exp of experience) {
      if (!exp.designation || !exp.company) {
        return res.status(400).json({
          success: false,
          message: "Designation and company are required fields"
        });
      }

      if (!exp.startingDate || !exp.endingDate) {
        return res.status(400).json({
          success: false,
          message: "Starting and ending years are required"
        });
      }

      if (!exp.location || !exp.location.city || !exp.location.state) {
        return res.status(400).json({
          success: false,
          message: "Location details (city and state) are required"
        });
      }

      if (!exp.discription) {
        return res.status(400).json({
          success: false,
          message: "Description is required"
        });
      }
    }

    // Find existing experience document for user or create new one
    let userExperience = await Experience.findOne({ userId: userId });

    if (userExperience) {
      userExperience.experience.push(...experience);
      await userExperience.save();
    } else {
      userExperience = await Experience.create({
        // userId: userId,
        experience: experience
      });
    }

    return res.status(201).json({
      success: true,
      message: "Experience added successfully",
      data: userExperience
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
      message: "Internal server error while adding experience",
      error: error.message
    });
  }
};

module.exports = addExperience;
