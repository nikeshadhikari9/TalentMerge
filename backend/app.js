//import packages
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan'); // For logging HTTP requests
const { CORS_ORIGIN, NODE_ENV, SESSION_SECRET } = require("./config/env.config");
const app = express();

// Importing backend routes under /api/v1 
const v1Router = require('./src/api/v1/index.routes')

// Connecting backend with frontend server
const isProduction = NODE_ENV === "production";

app.use(cors({
    origin: CORS_ORIGIN,
    credentials: true,
}))
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "strict" : "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
    },
})
);


app.use(express.json({ limit: '1000kb' })); // Adjust limit if needed
app.use(express.urlencoded({ extended: true, limit: '400kb' }));
app.use(express.static('public')); // Serve static files
app.use(cookieParser()); // Parse cookies
app.use(morgan('dev')); // Log HTTP requests

//middleware for error handling
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: err.message || 'Server error' });
});

app.use('/api/v1', v1Router);// mount entry point router


module.exports = app;