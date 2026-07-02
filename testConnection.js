const mongoose = require("mongoose");
require("dotenv").config();

async function test() {
  try {
    console.log("Connecting...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
    process.exit(0);
  } catch (err) {
    console.log("❌ Connection Failed");
    console.error(err);
    process.exit(1);
  }
}

test();