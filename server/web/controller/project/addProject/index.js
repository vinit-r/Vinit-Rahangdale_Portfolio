const Project = require("../../../../models/projects");

const addProject = async (req, res) => {
  try {
    const { userId } = req.params;
    const { project } = req.body;

    // console.log("userId", userId);
    

    // Validate userId
    if (!userId || userId.trim() === '') {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    // Validate project array
    if (!Array.isArray(project)) {
      return res.status(400).json({
        success: false,
        message: "Project must be provided as an array"
      });
    }

    // Validate each project entry
    for (const proj of project) {
      if (!proj.projectName || !proj.technology || !proj.projectImage) {
        return res.status(400).json({
          success: false,
          message: "Project name, image and technology are required fields"
        });
      }
    }

    // Find existing project document for user or create new one
    let userProject = await Project.findOne({ userId: userId });

    if (userProject) {
      userProject.project.push(...project);
      await userProject.save();
    } else {
      userProject = await Project.create({
        // userId: userId,
        project: project
      });
    }

    return res.status(201).json({
      success: true,
      message: "Project added successfully",
      data: userProject
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
      message: "Internal server error while adding project",
      error: error.message
    });
  }
};

module.exports = addProject;
