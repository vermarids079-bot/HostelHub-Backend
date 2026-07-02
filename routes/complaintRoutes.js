const express = require("express");

const router = express.Router();

const {

    createComplaint,

    getComplaints,

    getStudentComplaints,

    resolveComplaint,

    rejectComplaint

} = require("../controllers/complaintController");

router.post("/create", createComplaint);

router.get("/all", getComplaints);

router.get("/student/:studentId", getStudentComplaints);

router.put("/resolve/:id", resolveComplaint);

router.put("/reject/:id", rejectComplaint);

module.exports = router;