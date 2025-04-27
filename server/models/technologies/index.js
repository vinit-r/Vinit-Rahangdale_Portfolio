const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'PortfolioUser', required: true },
  technologies: [
    {
      name: { type: String, required: true },
      category: {
        type: String,
        enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Languages'],
        required: true,
      },
      proficiency: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
      },
      icon: { type: String },
    },
  ]
});

const Technology = mongoose.model('Technology', technologySchema);

module.exports = Technology;
