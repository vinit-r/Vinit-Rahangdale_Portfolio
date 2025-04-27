const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'PortfolioUser', required: true },
  education: [
    {
      institution: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      details: {
        percentage: {
          type: Number,
        },
        startingYear: {
          type: String,
          required: true
        },
        endingYear: {
          type: String,
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
        }
      }
    }
  ]
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
