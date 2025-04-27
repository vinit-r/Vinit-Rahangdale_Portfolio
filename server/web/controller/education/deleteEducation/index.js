const Education = require("../../../../models/education");


const deleteEducation = async (req, res) => {
    try {
      const { userId } = req.params;
      const {educationId} = req.body
        if (!userId){
            retrun.json({
                message: "UserId is required",
                status: 400
            })
        }

        if(educationId){
            const deleteEducationAndUpdate = await Education.findOneAndUpdate({userId: userId},
                {
                    $pull:{
                        education: {_id: educationId}
                    }
                },
                {new: true}
            )

            if(!deleteEducationAndUpdate){
                return res.json({
                    message: 'Education record not found',
                    status: 404
                })
            }

            if(deleteEducationAndUpdate?.education?.length === 0){
                await Education.findOneAndDelete({userId: userId})
                return res.status(200).json({
                    success: true,
                    message: "Education entry deleted and empty record removed"
                  });
            }

            return res.status(200).json({
                success: true,
                message: "Education entry deleted successfully",
                data: deleteEducationAndUpdate
              });

        }else{

          const deleteEducation =  await Education.findOneAndDelete({userId: userId})

            if(!deleteEducation){
                return res.status(404).json({
                    success: false,
                    message: "Education record not found for this user"
                })
            }

            return res.status(200).json({
                success: true,
                message: "Education record deleted successfully",
            })
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
            message: "Internal server error while deleting education details",
            error: error.message
          });
    }
    }
    
    module.exports = deleteEducation