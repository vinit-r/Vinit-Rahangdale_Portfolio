const Experience = require("../../../../models/experience");

const updateExperience = async (req, res) => {
  try {
    const { userId } = req.params;
    const { experienceId, updates } = req.body;

    if (!experienceId || !updates) {
      return res.status(400).json({
        success: false,
        message: "experienceId and updates are required"
      });
    }

    // Find and update specific experience entry
    const updatedExperience = await Experience.findOneAndUpdate(
      { 
        userId: userId,
        'experience._id': experienceId 
      },
      { 
        $set: {
          'experience.$.designation': updates.designation || undefined,
          'experience.$.company': updates.company || undefined,
          'experience.$.startingDate': updates.startingDate || undefined,
          'experience.$.endingDate': updates.endingDate || undefined,
          'experience.$.location.city': updates.location?.city || undefined,
          'experience.$.location.state': updates.location?.state || undefined,
          'experience.$.discription': updates.discription || undefined
        }
      },
      { 
        new: true,
        runValidators: true,
        omitUndefined: true 
      }
    );

    if (!updatedExperience) {
      return res.status(404).json({
        success: false,
        message: "Experience record not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Experience details updated successfully",
      data: updatedExperience
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
      message: "Internal server error while updating experience details",
      error: error.message
    });
  }
};

module.exports = updateExperience;
