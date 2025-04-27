const Visitors = require("../../../models/visitor");
const visitorsCount = async (req, res) => {
  try {
    let visitor = await Visitors.findOne();
    if (!visitor) {
      visitor = new Visitors();
      await visitor.save();
    }

    visitor.count += 1;
    const count = await visitor.save();

    // Return the updated count
    res.json({ count: visitor.count });
    // res.send({
    //   message: "Success",
    //   data: count,
    //   status: 200,
    // });
  } catch (error) {
    console.log(error);
  }
};

module.exports = visitorsCount;
