const Technology = require("../../../../models/technologies");

const getTechnology = async (req, res) => {
  try {
    const { userId } = req.params;    

    // Validate userId
    if (!userId || userId.trim() === '') {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    // Find technology details for the user
    const technologyDetails = await Technology.findOne({ userId: userId });

    // Check if technology details exist
    if (!technologyDetails) {
      return res.status(404).json({
        success: false,
        message: "No technology details found for this user"
      });
    }

    // Return technology details
    return res.status(200).json({
      success: true,
      message: "Technology details retrieved successfully",
      data: technologyDetails
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
      message: "Internal server error while fetching technology details",
      error: error.message
    });
  }
};

module.exports = getTechnology;
