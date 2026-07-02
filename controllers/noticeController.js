const Notice = require("../models/Notice");

// ============================
// Add Notice
// ============================

exports.addNotice = async (req, res) => {

    try {

        const notice = await Notice.create(req.body);

        res.status(201).json({

            message: "Notice Posted Successfully",

            notice

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Get All Notices
// ============================

exports.getNotices = async (req, res) => {

    try {

        const notices = await Notice.find().sort({

            createdAt: -1

        });

        res.status(200).json(notices);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ============================
// Delete Notice
// ============================

exports.deleteNotice = async (req, res) => {

    try {

        await Notice.findByIdAndDelete(req.params.id);

        res.status(200).json({

            message: "Notice Deleted Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};