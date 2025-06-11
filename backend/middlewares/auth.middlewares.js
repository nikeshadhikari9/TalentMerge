const User = require("../models/user.model.js");

const verifyUserSession = async (req, res, next) => {
    try {
        if (!req.session || !req.session.user) {
            return res.redirect("/user/login")
        }
        const userId = req.session.user;
        const user = await User.findById(userId);
        if (!user) {
            return res.redirect('/home');
        }
        req.user = user;
        next();
    } catch (error) {
        console.error('Error verifying session:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const redirectLoggedInUser = async (req, res, next) => {
    try {
        if (req.session.user) {
            return res.redirect('/home');

        }
        next();
    }
    catch (error) {
        return res.json({ error: 'Internal server error' });
    }
};

module.exports = {
    verifyUserSession, verifyAdminSession, clearCache, addLogoutButton, redirectLoggedInUser, addRoomtButton
};

