
const bcrypt = require('bcryptjs')
const matchPasswordAndGenerateToken = async (email, password) => {
    try {
        let user;
        if (email) {
            user = await User.findOne({ email: email });
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

module.exports = { matchPasswordAndGenerateToken }