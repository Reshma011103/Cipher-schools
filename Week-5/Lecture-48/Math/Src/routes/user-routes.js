const express = require("express");

const router = express. Router();

const userController = require("../controllers/user-controller");

router.post("/login", userController.loginUser);
router.post("/signup", userController.addNewUserUser);
router.delete("/:self",authmiddleware, userController.deleteUser)


module.exports = router;