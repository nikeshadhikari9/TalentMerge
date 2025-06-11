require('dotenv').config('../.env');
//exporting environment variables
module.exports = {
    PORT: process.env.SERVER_PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    NODE_ENV: process.env.NODE_ENV,
    SESSION_SECRET: process.env.SESSION_SECRET,
}