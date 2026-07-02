const express = require("express");

const router = express.Router();

const {

    createBooking,

    getBookings,

    getStudentBooking,

    getStudentBookingStatus,

    approveBooking,

    rejectBooking

} = require("../controllers/bookingController");


// ===============================
// Booking Routes
// ===============================

router.post(

    "/create",

    createBooking

);

router.get(

    "/all",

    getBookings

);

router.get(

    "/student/:studentId",

    getStudentBooking

);

router.get(

    "/student-status/:id",

    getStudentBookingStatus

);

router.put(

    "/approve/:id",

    approveBooking

);

router.put(

    "/reject/:id",

    rejectBooking

);

module.exports = router;