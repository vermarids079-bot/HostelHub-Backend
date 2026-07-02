const roomRoutes = require("./routes/roomRoutes");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bookingRoutes = require("./routes/bookingRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const leaveRoutes = require("./routes/leaveRoutes");
const noticeRoutes = require("./routes/noticeRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

require("dotenv").config();
const profileRoutes = require("./routes/profileRoutes");


const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/analytics", analyticsRoutes);
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});