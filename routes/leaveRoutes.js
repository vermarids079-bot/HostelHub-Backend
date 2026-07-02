const express = require("express");

const router = express.Router();

const {

    applyLeave,

    getLeaves,

    getStudentLeaves,

    approveLeave,

    rejectLeave

} = require("../controllers/leaveController");

router.post("/apply", applyLeave);

router.get("/all", getLeaves);

router.get("/student/:studentId", getStudentLeaves);

router.put("/approve/:id", approveLeave);

router.put("/reject/:id", rejectLeave);

module.exports = router;