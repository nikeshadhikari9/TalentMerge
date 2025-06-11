const User = require('../user/user.models');
const bcrypt = require('bcryptjs')
const { sendMail } = require('../../../../utils/sendMail')

const { FRONTEND_WEBSITE_URL } = require('../../../../config/env.config')
const matchPasswordAndGenerateToken = async (identifier, password) => {
    try {
        let user;
        if (identifier.includes("@")) {
            user = await User.findOne({ email: identifier });
        } else {
            user = await User.findOne({ contactNumber: identifier });
        }

        if (!user) {
            return { success: false, error: "User not registered" };
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return { success: false, error: "Password doesn't match" };
        }

        return { success: true, user };

    } catch (error) {
        console.error("Error in matchPasswordAndGenerateToken:", error);
        return { success: false, error: "Internal server error" };
    }
};


const sendResetEmail = async (email, name, user_id) => {
    try {
        const timestamp = Date.now();
        const subject = "Reset Password Email";
        const html = `<p style="font-size: 16px; font-family: Arial, sans-serif;">
            Hello, ${name},<br><br>
            Please click the button below to reset your password:
            </p>
            <a href="${FRONTEND_WEBSITE_URL}/reset-password/${user_id}?timestamp=${timestamp}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; font-size: 16px; font-family: Arial, sans-serif;">Reset Password</a>
            <p style="font-size: 16px; font-family: Arial, sans-serif;">
            This link will expire in 5 minutes after receiving this email.
            </p>
            `;
        sendMail(email, subject, html);
    }
    catch (error) {
        console.log(error)
    }
}



module.exports = { matchPasswordAndGenerateToken, sendResetEmail }