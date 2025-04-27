const Experience = require("../../../../models/experience");

const getExperience = async (req, res) => {
  try {
    const { userId } = req.params;    

    // Validate userId
    if (!userId || userId.trim() === '') {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    // Find experience details for the user
    const experienceDetails = await Experience.findOne({ userId: userId });

    // Check if experience details exist
    if (!experienceDetails) {
      return res.status(404).json({
        success: false,
        message: "No experience details found for this user"
      });
    }

    // Return experience details
    return res.status(200).json({
      success: true,
      message: "Experience details retrieved successfully",
      data: experienceDetails
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
      message: "Internal server error while fetching experience details",
      error: error.message
    });
  }
};

module.exports = getExperience;
