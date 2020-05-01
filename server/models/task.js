const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  completed: {
    type: Boolean,
    index: true
  }
});

const Task = new mongoose.model("Task", taskSchema);

module.exports = Task;
