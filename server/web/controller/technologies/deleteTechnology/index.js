const Technology = require("../../../../models/technologies");

const deleteTechnology = async (req, res) => {
    try {
        const { userId } = req.params;
        const { technologyId } = req.body;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "UserId is required"
            });
        }

        if (technologyId) {
            const deleteTechnologyAndUpdate = await Technology.findOneAndUpdate(
                { userId: userId },
                {
                    $pull: {
                        technologies: { _id: technologyId }
                    }
                },
                { new: true }
            );

            if (!deleteTechnologyAndUpdate) {
                return res.status(404).json({
                    success: false,
                    message: 'Technology record not found'
                });
            }

            if (deleteTechnologyAndUpdate?.technologies?.length === 0) {
                await Technology.findOneAndDelete({ userId: userId });
                return res.status(200).json({
                    success: true,
                    message: "Technology entry deleted and empty record removed"
                });
            }

            return res.status(200).json({
                success: true,
                message: "Technology entry deleted successfully",
                data: deleteTechnologyAndUpdate
            });

        } else {
            const deleteTechnology = await Technology.findOneAndDelete({ userId: userId });

            if (!deleteTechnology) {
                return res.status(404).json({
                    success: false,
                    message: "Technology record not found for this user"
                });
            }

            return res.status(200).json({
                success: true,
                message: "Technology record deleted successfully"
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
            message: "Internal server error while deleting technology details",
            error: error.message
        });
    }
};

module.exports = deleteTechnology;
