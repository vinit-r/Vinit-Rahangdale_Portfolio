const Education = require("../../../../models/education");

const updateEducation = async (req, res) => {
  try {
    const { userId } = req.params;
    const { educationId, updates } = req.body;

    if (!educationId || !updates) {
      return res.status(400).json({
        success: false,
        message: "educationId and updates are required"
      });
    }

    // Find and update specific education entry
    const updatedEducation = await Education.findOneAndUpdate(
      { 
        userId: userId,
        'education._id': educationId 
      },
      { 
        $set: {
          'education.$.institution': updates.institution || undefined,
          'education.$.degree': updates.degree || undefined,
          'education.$.details.percentage': updates.details?.percentage || undefined,
          'education.$.details.cgpa': updates.details?.cgpa || undefined,
          'education.$.details.startingYear': updates.details?.startingYear || undefined,
          'education.$.details.endingYear': updates.details?.endingYear || undefined,
          'education.$.details.location.city': updates.details?.location?.city || undefined,
          'education.$.details.location.state': updates.details?.location?.state || undefined
        }
      },
      { 
        new: true,
        runValidators: true,
        omitUndefined: true 
      }
    );

    if (!updatedEducation) {
      return res.status(404).json({
        success: false,
        message: "Education record not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Education details updated successfully",
      data: updatedEducation
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
      message: "Internal server error while updating education details",
      error: error.message
    });
  }
};

module.exports = updateEducation;
