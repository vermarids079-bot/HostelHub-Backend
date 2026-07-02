const Leave = require("../models/Leave");

// ============================
// Apply Leave
// ============================

exports.applyLeave = async (req, res) => {

    try {

        const leave = await Leave.create(req.body);

        res.status(201).json({

            message: "Leave Applied Successfully",

            leave

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Get All Leave Requests
// ============================

exports.getLeaves = async (req, res) => {

    try {

        const leaves = await Leave.find();

        res.status(200).json(leaves);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Get Student Leaves
// ============================

exports.getStudentLeaves = async (req, res) => {

    try {

        const leaves = await Leave.find({

            studentId: req.params.studentId

        });

        res.status(200).json(leaves);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Approve Leave
// ============================

exports.approveLeave = async (req, res) => {

    try {

        const leave = await Leave.findById(req.params.id);

        if (!leave) {

            return res.status(404).json({

                message: "Leave Request Not Found"

            });

        }

        leave.status = "Approved";

        await leave.save();

        res.status(200).json({

            message: "Leave Approved Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Reject Leave
// ============================

exports.rejectLeave = async (req, res) => {

    try {

        const leave = await Leave.findById(req.params.id);

        if (!leave) {

            return res.status(404).json({

                message: "Leave Request Not Found"

            });

        }

        leave.status = "Rejected";

        await leave.save();

        res.status(200).json({

            message: "Leave Rejected Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};