const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'PortfolioUser', required: true },
  project: [
    {
      projectName:{
        type: String,
        require: true
      },
      projectImage:{
        type: String,
        require: true
      },
      technology: {
        type:String,
        require: true
      },
      discription: {
        type: String,
      },
      projectGitUrl:{
        type: String
      }
    }
  ]
});

const Project = mongoose.model('Projects', projectSchema);

module.exports = Project;
