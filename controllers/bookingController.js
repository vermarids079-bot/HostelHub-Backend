const Booking = require("../models/Booking");
const Room = require("../models/Room");

// ============================
// Create Booking
// ============================

exports.createBooking = async (req, res) => {

    try {

        const existingBooking = await Booking.findOne({

            studentId: req.body.studentId,

            status: {

                $in: ["Pending", "Approved"]

            }

        });

        if (existingBooking) {

            return res.status(400).json({

                message: "You already have a booking request."

            });

        }

        const room = await Room.findById(req.body.roomId);

        if (!room) {

            return res.status(404).json({

                message: "Room not found."

            });

        }

        if (room.occupied >= room.capacity) {

            return res.status(400).json({

                message: "Room is Full."

            });

        }

        const booking = await Booking.create(req.body);

        res.status(201).json({

            message: "Room Booking Request Sent Successfully",

            booking

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Get All Bookings
// ============================

exports.getBookings = async (req, res) => {

    try {

        const bookings = await Booking.find();

        res.status(200).json(bookings);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Get Student Booking
// ============================

exports.getStudentBooking = async (req, res) => {

    try {

        const booking = await Booking.findOne({

            studentId: req.params.studentId

        });

        if (!booking) {

            return res.status(404).json({

                message: "No Booking Found"

            });

        }

        res.status(200).json(booking);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Get Student Booking Status
// ============================

exports.getStudentBookingStatus = async (req, res) => {

    try {

        const booking = await Booking.findOne({

            studentId: req.params.id,

            status: {

                $in: ["Pending", "Approved"]

            }

        });

        if (!booking) {

            return res.status(200).json({

                hasBooking: false

            });

        }

        return res.status(200).json({

            hasBooking: true,

            status: booking.status

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Approve Booking
// ============================

exports.approveBooking = async (req, res) => {

    try {

        const booking = await Booking.findById(req.params.id);

        if (!booking) {

            return res.status(404).json({

                message: "Booking not found"

            });

        }

        if (booking.status === "Approved") {

            return res.status(400).json({

                message: "Booking already approved"

            });

        }

        const room = await Room.findById(booking.roomId);

        if (!room) {

            return res.status(404).json({

                message: "Room not found"

            });

        }

        if (room.occupied >= room.capacity) {

            return res.status(400).json({

                message: "Room is already Full"

            });

        }

        booking.status = "Approved";

        await booking.save();

        room.occupied++;

        if (room.occupied >= room.capacity) {

            room.status = "Full";

        }

        else {

            room.status = "Available";

        }

        await room.save();

        res.status(200).json({

            message: "Booking Approved Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Reject Booking
// ============================

exports.rejectBooking = async (req, res) => {

    try {

        const booking = await Booking.findById(req.params.id);

        if (!booking) {

            return res.status(404).json({

                message: "Booking not found"

            });

        }

        booking.status = "Rejected";

        await booking.save();

        res.status(200).json({

            message: "Booking Rejected Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};