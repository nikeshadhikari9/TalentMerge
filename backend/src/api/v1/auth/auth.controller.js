const JobSeeker = require('../../../../models/job-seeker.models');
const Organization = require('../../../../models/organization.models');
const { matchPasswordAndGenerateToken } = require('./auth.service')

const register = async (req, res) => {
    try {
        const { fullName, username, email, contactNumber, password, role } = req.body;
        if (role === "organization") {
            const existedOrganizationEmail = await Organization.findOne({ email });
            if (existedOrganizationEmail) {
                return res.status(409).json({ message: 'Organization Email already registered' });
            }
            const logo = "https://imgs.search.brave.com/UdortXHLdfpYIIqvy9aEoQbDm7PUOckVxkrg6ltA4ts/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC91c2VyLWlj/b24tMjI3eDI1Ni1j/eXJiOXBpNS5wbmc";
            const newOrganization = await Organization.create({

            })
        }

        const newUser = await User.create({
            fullName,
            district,
            userImage,
            location: {
                latitude: location.latitude,
                longitude: location.longitude
            },
            gender,
            contactNumber,
            email,
            password,
            bloodDetails: {
                bloodGroup: bloodGroup
            },
            approved: false
        });
        return res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Server ko error' });
    }
}

const loginUser = async (req, res) => {
    try {
        const { identifier, password } = req.body;
        const passwordMatching = await matchPasswordAndGenerateToken(identifier, password);
        if (passwordMatching) {
            const userObject = passwordMatching.user;
            const userId = userObject._id.toString();
            const user = await User.findOne({ _id: userId });
            req.session.user = userId
            const { password, ...userWithoutPassword } = user.toObject();
            return res.status(200).json({ message: "Logged in successfully", user: userWithoutPassword });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server ko error" });
    }
}

const logout = async (req, res) => {
    try {
        req.session.destroy();
        return res.json({ message: "Logged out succfully" })

    } catch (error) {
        console.error(error);
        return res.json({ message: 'Server ko successfully' });
    }
}
const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = User.findOne({ email: email });
        if (!findUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const mailSent = await sendResetEmail(email, user.fullName, user._id);
        return res.status(200).json("Password reset link has been sent to your email");

    } catch (error) {

    }
}


module.exports = { registerUser, loginUser, logout, forgetPassword }