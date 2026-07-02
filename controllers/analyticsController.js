const User = require("../models/User");
const Room = require("../models/Room");
const Booking = require("../models/Booking");
const Complaint = require("../models/Complaint");
const Leave = require("../models/Leave");
const Notice = require("../models/Notice");

exports.getAnalytics = async (req, res) => {

    try {

        const totalStudents = await User.countDocuments({

            role: "student"

        });

        const totalRooms = await Room.countDocuments();

        const availableRooms = await Room.countDocuments({

            status: "Available"

        });

        const fullRooms = await Room.countDocuments({

            status: "Full"

        });

        const totalBookings = await Booking.countDocuments();

        const totalComplaints = await Complaint.countDocuments();

        const totalLeaves = await Leave.countDocuments();

        const totalNotices = await Notice.countDocuments();

        res.status(200).json({

            totalStudents,

            totalRooms,

            availableRooms,

            fullRooms,

            totalBookings,

            totalComplaints,

            totalLeaves,

            totalNotices

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};