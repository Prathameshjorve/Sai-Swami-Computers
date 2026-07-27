require("dotenv").config();

const mongoose = require("mongoose");

console.log("===== START =====");
console.log("Mongoose Version:", mongoose.version);
console.log("Mongo URI:", process.env.MONGO_URI);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Connected Successfully");
        process.exit(0);
    })
    .catch((err) => {
        console.error("❌ Error:");
        console.error(err);
        process.exit(1);
    });