const express = require("express");
const router = express.Router();
const studentController = require("../controller/student");

router.get("/students", studentController.getStudents);
router.post("/student", studentController.postStudent);

module.exports = router;
