const updateTechnology = async (req, res) => {
  try {
    res.send({
      status: 200,
      message: "Technology updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateTechnology;
