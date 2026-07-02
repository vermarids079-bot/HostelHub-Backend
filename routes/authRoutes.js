const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getAllStudents,
  deleteStudent,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

router.get("/students", getAllStudents);
router.delete("/student/:id", deleteStudent);

module.exports = router;