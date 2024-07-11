const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const TaskController = require("../Controllers/task-controller")

const router = express.Router();

router.get("/self", authMiddleware, TaskController.getTasksByUser);

module.exports = router;