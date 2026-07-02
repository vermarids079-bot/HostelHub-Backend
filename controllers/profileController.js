const User = require("../models/User");

exports.updateProfile = async (req, res) => {
  try {

    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        contact: req.body.contact,
        hostelBlock: req.body.hostelBlock,
        roomNumber: req.body.roomNumber
      },
      { new: true }
    );

    res.status(200).json({
      message: "Profile Updated Successfully",
      user: updatedUser
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};