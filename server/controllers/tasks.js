const createError = require("http-errors");
const Task = require("../models/task");

module.exports = {
  getAllTasks: (req, res, next) => {
    // Get All Tasks
    Task.find()
      .exec()
      .then((docs) => {
        res.status(200).json(docs);
      })
      .catch((err) => {
        next(createError(err));
      });
  },
  getTask: (req, res, next) => {
    // Get Task by id
    Task.findById(req.params.id || req.body.id)
      .exec()
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch((err) => {
        next(createError(err));
      });
  },
  postTask: (req, res, next) => {
    // Post new Task
    Task.create(req.body)
      .then((doc) => {
        res.status(201).json(doc);
      })
      .catch((err) => {
        console.log("ERROR")
        next(createError(err));
      });
  },
  updateTask: (req, res, next) => {
    // Update Task
    Task.findByIdAndUpdate(req.params.id || req.body.id, req.body)
      .exec()
      .then((doc) => {
        res.status(202).json(doc);
      })
      .catch((err) => {
        next(createError(err));
      });
  },
  deleteTask: (req, res, next) => {
    // Get All Tasks
    Task.findByIdAndRemove(req.params.id || req.body.id)
      .exec()
      .then((doc) => {
        res.status(202).json(doc);
      })
      .catch((err) => {
        next(createError(err));
      });
  },
};
