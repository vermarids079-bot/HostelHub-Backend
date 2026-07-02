const Complaint = require("../models/Complaint");

// ============================
// Create Complaint
// ============================

exports.createComplaint = async (req, res) => {

    try {

        const complaint = await Complaint.create(req.body);

        res.status(201).json({

            message: "Complaint Submitted Successfully",

            complaint

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Get All Complaints
// ============================

exports.getComplaints = async (req, res) => {

    try {

        const complaints = await Complaint.find();

        res.status(200).json(complaints);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Get Student Complaints
// ============================

exports.getStudentComplaints = async (req, res) => {

    try {

        const complaints = await Complaint.find({

            studentId: req.params.studentId

        });

        res.status(200).json(complaints);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Resolve Complaint
// ============================

exports.resolveComplaint = async (req, res) => {

    try {

        const complaint = await Complaint.findById(req.params.id);

        if (!complaint) {

            return res.status(404).json({

                message: "Complaint not found"

            });

        }

        complaint.status = "Resolved";

        await complaint.save();

        res.status(200).json({

            message: "Complaint Resolved Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Reject Complaint
// ============================

exports.rejectComplaint = async (req, res) => {

    try {

        const complaint = await Complaint.findById(req.params.id);

        if (!complaint) {

            return res.status(404).json({

                message: "Complaint not found"

            });

        }

        complaint.status = "Rejected";

        await complaint.save();

        res.status(200).json({

            message: "Complaint Rejected Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};