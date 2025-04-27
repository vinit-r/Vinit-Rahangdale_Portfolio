const Education = require("../../../../models/education");

const getEducation = async (req, res) => {
  try {
    const { userId } = req.params;    

    // Validate userId
    if (!userId || userId.trim() === '') {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    // Find education details for the user
    const educationDetails = await Education.findOne({ userId: userId });

    // Check if education details exist
    if (!educationDetails) {
      return res.status(404).json({
        success: false,
        message: "No education details found for this user"
      });
    }

    // Return education details
    return res.status(200).json({
      success: true,
      message: "Education details retrieved successfully",
      data: educationDetails
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
      message: "Internal server error while fetching education details",
      error: error.message
    });
  }
};

module.exports = getEducation;
