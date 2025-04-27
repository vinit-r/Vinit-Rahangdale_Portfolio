const PortfolioUser = require('../../../../models/user'); // Adjust path as necessary

const getUser = async (req, res) => {
    try {
        // Extract email from the query parameters
        const { email } = req.query;

        // Check if email is provided
        if (!email) {
            return res.status(400).json({
                message: 'Email is required.',
                status: 400,
            });
        }

        // // Validate email format (optional, but recommended)
        // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        // if (!emailRegex.test(email)) {
        //     return res.status(400).json({
        //         message: 'Invalid email format.',
        //         status: 400,
        //     });
        // }

        // Fetch user by email from the database
        const user = await PortfolioUser.findOne({ email });

        // If user is not found, return 404
        if (!user) {
            return res.status(404).json({
                message: 'User not found.',
                status: 404,
            });
        }

        // Return user data as response
        res.status(200).json({
            message: 'User fetched successfully.',
            data: user,
            status: 200,
        });
    } catch (error) {
            console.log(error);

        // Handle different types of errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Validation Error',
                error: error.message,
                status: 400,
            });
        }

        // If error is not handled, return a generic internal server error
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
            status: 500,
        });
    }
};

module.exports = getUser;
