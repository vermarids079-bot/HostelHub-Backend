const express = require("express");

const router = express.Router();

const {

    addNotice,

    getNotices,

    deleteNotice

} = require("../controllers/noticeController");

router.post("/add", addNotice);

router.get("/all", getNotices);

router.delete("/delete/:id", deleteNotice);

module.exports = router;