const Room = require("../models/Room");

// Add Room
exports.addRoom = async (req, res) => {

    try {

        const room = await Room.create(req.body);

        res.status(201).json({
            message: "Room Added Successfully",
            room
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Rooms
exports.getRooms = async (req, res) => {

    try {

        const rooms = await Room.find();

        res.status(200).json(rooms);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Room
exports.updateRoom = async (req, res) => {

    try {

        const updatedRoom = await Room.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        res.status(200).json({

            message: "Room Updated Successfully",

            room: updatedRoom

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


// Delete Room
exports.deleteRoom = async (req, res) => {

    try {

        await Room.findByIdAndDelete(req.params.id);

        res.status(200).json({

            message: "Room Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// Update Room Status
exports.updateRoomStatus = async (req, res) => {

    try {

        const rooms = await Room.find();

        for (const room of rooms) {

            if (room.occupied >= room.capacity) {

                room.status = "Full";

            } else {

                room.status = "Available";

            }

            await room.save();

        }

        res.status(200).json({

            message: "Room Status Updated Successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};