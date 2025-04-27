const deleteUser = (req, res) => {
    try {
        console.log("this is deleteUser API");
        
        res.send({
            message: 'This is deleteUser API ',
            status: 200
        })
    } catch (error) {
        console.log(error);
        
    }
    }
    
    module.exports = deleteUser