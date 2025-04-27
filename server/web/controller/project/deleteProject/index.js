const Project = require("../../../../models/projects");

const deleteProject = async (req, res) => {
    try {
      const { userId } = req.params;
      const { projectId } = req.body;

      if (!userId) {
        return res.status(400).json({
          success: false,
          message: "UserId is required"
        });
      }

      if (projectId) {
        const deleteProjectAndUpdate = await Project.findOneAndUpdate(
          { userId: userId },
          {
            $pull: {
              project: { _id: projectId }
            }
          },
          { new: true }
        );

        if (!deleteProjectAndUpdate) {
          return res.status(404).json({
            success: false,
            message: 'Project record not found'
          });
        }

        if (deleteProjectAndUpdate?.project?.length === 0) {
          await Project.findOneAndDelete({ userId: userId });
          return res.status(200).json({
            success: true,
            message: "Project entry deleted and empty record removed"
          });
        }

        return res.status(200).json({
          success: true,
          message: "Project entry deleted successfully",
          data: deleteProjectAndUpdate
        });

      } else {
        const deleteProject = await Project.findOneAndDelete({ userId: userId });

        if (!deleteProject) {
          return res.status(404).json({
            success: false,
            message: "Project record not found for this user"
          });
        }

        return res.status(200).json({
          success: true,
          message: "Project record deleted successfully"
        });
      }

    } catch (error) {
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: "Invalid ID format",
          error: error.message
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error while deleting project details",
        error: error.message
      });
    }
};

module.exports = deleteProject;
