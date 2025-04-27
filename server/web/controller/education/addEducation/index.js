const Education = require("../../../../models/education");

const addEducation = async (req, res) => {
  try {
    const { userId } = req.params;
    const { education } = req.body;

    // Input validation
    if (!userId || !education || !Array.isArray(education)) {
      return res.status(400).json({
        success: false,
        message: "Invalid request data. User and education array are required"
      });
    }

    // Validate education entries
    for (const edu of education) {
      if (!edu.institution || !edu.degree || !edu.details) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields in education details"
        });
      }

      if (!edu.details.startingYear || !edu.details.endingYear) {
        return res.status(400).json({
          success: false,
          message: "Starting and ending years are required"
        });
      }

      if (!edu.details.location || !edu.details.location.city || !edu.details.location.state) {
        return res.status(400).json({
          success: false,
          message: "Location details (city and state) are required"
        });
      }
    }

    // Format education data
    const newEducationEntries = education.map(edu => ({
      institution: edu.institution,
      degree: edu.degree,
      details: {
        // cgpa: edu.details.cgpa,
        percentage: edu.details.percentage,
        startingYear: edu.details.startingYear,
        endingYear: edu.details.endingYear,
        location: {
          city: edu.details.location.city,
          state: edu.details.location.state
        }
      }
    }));

    // Find existing education record or create new one
    const updatedEducation = await Education.findOneAndUpdate(
      { userId: userId },
      { 
        $push: { 
          education: { 
            $each: newEducationEntries 
          } 
        } 
      },
      { 
        new: true, 
        upsert: true, 
        runValidators: true 
      }
    );

    res.status(201).json({
      success: true,
      message: "Education details added successfully",
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

    res.status(500).json({
      success: false,
      message: "Internal server error while adding education details",
      error: error.message
    });
  }
};

module.exports = addEducation;
