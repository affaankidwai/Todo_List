const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  start_date: {
    type: Date,
    required: false,
  },
  category: {
    type: String,
    required: false,
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

module.exports = mongoose.model("Todo", todoSchema);
