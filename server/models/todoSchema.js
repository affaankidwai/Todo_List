const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  deadline: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model('Todo', todoSchema);