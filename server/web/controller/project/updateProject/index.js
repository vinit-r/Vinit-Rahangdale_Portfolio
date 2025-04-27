const Project = require("../../../../models/projects");

const updateProject = async (req, res) => {
  try {
    const { userId } = req.params;
    const { projectId, updates } = req.body;

    if (!projectId || !updates) {
      return res.status(400).json({
        success: false,
        message: "projectId and updates are required"
      });
    }

    // Find and update specific project entry
    const updatedProject = await Project.findOneAndUpdate(
      { 
        userId: userId,
        'project._id': projectId 
      },
      { 
        $set: {
          'project.$.projectName': updates.projectName || undefined,
          'project.$.projectImage': updates.projectImage || undefined,
          'project.$.technology': updates.technology || undefined,
          'project.$.discription': updates.discription || undefined,
          'project.$.projectGitUrl': updates.projectGitUrl || undefined,
          'project.$.projectLiveUrl': updates.projectLiveUrl || undefined,
          'project.$.startDate': updates.startDate || undefined,
          'project.$.endDate': updates.endDate || undefined
        }
      },
      { 
        new: true,
        runValidators: true,
        omitUndefined: true 
      }
    );

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: "Project record not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project details updated successfully",
      data: updatedProject
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
      message: "Internal server error while updating project details",
      error: error.message
    });
  }
};

module.exports = updateProject;
