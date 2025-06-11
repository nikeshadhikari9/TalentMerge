const mongoose = require('mongoose');
const { MONGODB_URI } = require('./env.config');

//database connection
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Database Connected")
    } catch (error) {
        console.error("Connection Error:", error);
    }
}
module.exports = connectDB;