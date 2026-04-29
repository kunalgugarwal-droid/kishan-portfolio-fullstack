const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['web', 'mobile', 'design', 'other'],
    default: 'other'
  },
  videoUrl: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);