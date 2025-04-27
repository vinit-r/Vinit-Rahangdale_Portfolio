const Experience = require("../../../../models/experience");

const deleteExperience = async (req, res) => {
    try {
      const { userId } = req.params;
      const { experienceId } = req.body;

      if (!userId) {
        return res.status(400).json({
          success: false,
          message: "UserId is required"
        });
      }

      if (experienceId) {
        const deleteExperienceAndUpdate = await Experience.findOneAndUpdate(
          { userId: userId },
          {
            $pull: {
              experience: { _id: experienceId }
            }
          },
          { new: true }
        );

        if (!deleteExperienceAndUpdate) {
          return res.status(404).json({
            success: false,
            message: 'Experience record not found'
          });
        }

        if (deleteExperienceAndUpdate?.experience?.length === 0) {
          await Experience.findOneAndDelete({ userId: userId });
          return res.status(200).json({
            success: true,
            message: "Experience entry deleted and empty record removed"
          });
        }

        return res.status(200).json({
          success: true,
          message: "Experience entry deleted successfully",
          data: deleteExperienceAndUpdate
        });

      } else {
        const deleteExperience = await Experience.findOneAndDelete({ userId: userId });

        if (!deleteExperience) {
          return res.status(404).json({
            success: false,
            message: "Experience record not found for this user"
          });
        }

        return res.status(200).json({
          success: true,
          message: "Experience record deleted successfully"
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
        message: "Internal server error while deleting experience details",
        error: error.message
      });
    }
};

module.exports = deleteExperience;
