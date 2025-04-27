const PortfolioUser = require('../../../../models/user');

const updateUser = async (req, res) => {
    try {
        const { id } = req.params; 
                
        // Validate if email is provided
        if (!id) {
            return res.status(400).json({
                message: 'id is required to update user.',
                status: 400,
            });
        }

        // Use findOneAndUpdate to update the user data
        const updatedUser = await PortfolioUser.findOneAndUpdate(
            { _id: id }, req.body,
            { new: true, runValidators: true }
        );

        // Check if the user exists and was updated
        if (!updatedUser) {
            return res.status(404).json({
                message: 'User not found.',
                status: 404,
            });
        }

        // Send success response with updated user data
        res.status(200).json({
            message: 'User updated successfully.',
            data: updatedUser,
            status: 200,
        });

    } catch (error) {
        console.log(error);     

        // Handle validation errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Validation Error',
                error: error.message,
                status: 400,
            });
        }

        // Handle other unexpected errors
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
            status: 500,
        });
    }
};

module.exports = updateUser;
