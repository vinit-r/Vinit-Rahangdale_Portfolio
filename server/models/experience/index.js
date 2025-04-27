const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'PortfolioUser', required: true },
  experience: [
    {
      designation:{
        type: String,
        require: true
      },
      company: {
        type: String,
        required: true
      },
      startingDate: {
        type: Date,
        required: true
      },
      endingDate: {
        type: Date,
        required: true
      },
      location: {
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        }
      },
      discription: {
        type: String,
        require: true
      },
    }
  ]
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
