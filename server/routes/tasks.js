const router = require("express").Router();
const tasksController = require("../controllers/tasks");

// Get All Taks
router.get("/", tasksController.getAllTasks);

// Get Task by Id
router.get("/:id", tasksController.getTask);

// Post a new Task
router.post("/", tasksController.postTask);

// Update a Task by Id
router.put("/:id", tasksController.updateTask);

// Delete a Task by Id
router.delete("/:id", tasksController.deleteTask);

module.exports = router;
