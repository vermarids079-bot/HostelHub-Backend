const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: String,

    contact: {
      type: String,
      default: ""
    },

    hostelBlock: {
      type: String,
      default: ""
    },

    roomNumber: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);