const Project = require("../../../../models/projects");

const getProject = async (req, res) => {
  try {
    const { userId } = req.params;    

    // Validate userId
    if (!userId || userId.trim() === '') {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    // Find project details for the user
    const projectDetails = await Project.findOne({ userId: userId });

    // Check if project details exist
    if (!projectDetails) {
      return res.status(404).json({
        success: false,
        message: "No project details found for this user"
      });
    }

    // Return project details
    return res.status(200).json({
      success: true,
      message: "Project details retrieved successfully",
      data: projectDetails
    });

  } catch (error) {
    // Handle specific MongoDB errors
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID format",
        error: error.message
      });
    }

    // Handle other unexpected errors
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching project details",
      error: error.message
    });
  }
};

module.exports = getProject;
