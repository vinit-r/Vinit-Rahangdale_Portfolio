const { format, parse } = require ("date-fns");
const PortfolioUser = require('../../../../models/user'); // Adjust the path as necessary

const createUser = async (req, res) => {
    try {
        const {
            firstName, lastName, email, dob, phone,
            totalExperience, totalProjects, totalCertification,
            description
        } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !description) {
            return res.status(400).send({
                message: 'Missing required fields: firstName, lastName, currentCompany, email, description and phone are mandatory.',
                status: 400
            });
        }
        // const parsedDate = parse(dob, 'dd-MM-yyyy', new Date());
        // const formattedDob = format(parsedDate, 'yyyy-MM-dd');
           
        // Create and save user
        const user = new PortfolioUser({
            firstName,
            lastName,
            email,
            dob,
            phone,
            totalExperience,
            totalProjects,
            totalCertification,
            description,
        });

        const savedUser = await user.save();

        res.status(201).send({
            message: 'User created successfully',
            data: savedUser,
            status: 201
        });
    } catch (error) {
        console.error('Error in createUser API:', error);

        // Handle specific errors
        if (error.name === 'ValidationError') {
            return res.status(400).send({
                message: 'Validation Error',
                error: error.message,
                status: 400
            });
        }

        res.status(500).send({
            message: 'Internal Server Error',
            error: error.message,
            status: 500
        });
    }
};

module.exports = createUser;
