const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(

    {

        studentId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        studentName: {

            type: String,

            required: true

        },

        studentEmail: {

            type: String,

            required: true

        },

        roomId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Room",

            required: true

        },

        roomNumber: {

            type: String,

            required: true

        },

        status: {

            type: String,

            default: "Pending"

        }

    },

    {

        timestamps: true

    }

);

module.exports = mongoose.model("Booking", bookingSchema);