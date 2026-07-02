const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: true,
      unique: true
    },

    block: {
      type: String,
      required: true
    },

    floor: {
      type: Number,
      required: true
    },

    capacity: {
      type: Number,
      required: true
    },

    occupied: {
      type: Number,
      default: 0
    },

    status: {
      type: String,
      default: "Available"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Room", roomSchema);