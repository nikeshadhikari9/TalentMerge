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
            // const logo = "https://imgs.search.brave.com/UdortXHLdfpYIIqvy9aEoQbDm7PUOckVxkrg6ltA4ts/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC91c2VyLWlj/b24tMjI3eDI1Ni1j/eXJiOXBpNS5wbmc";
            const newOrganization = await Organization.create({
                name: fullName,
                email: email,
                password: password,

            })
            return res.status(201).json({ message: 'Organization registered successfully' });
        }
        if (role === "jobseeker") {
            const existedJobSeekerEmail = await JobSeeker.findOne({ email });
            const existedJobSeekerUsername = await JobSeeker.findOne({ username });
            if (existedJobSeekerEmail) {
                return res.status(409).json({ message: 'User Email already registered' });
            }
            if (existedJobSeekerUsername) {
                return res.status(409).json({ message: 'Username already exist' });
            }
            const newJobSeeker = await JobSeeker.create({
                fullName: fullName,
                username: username,
                email: email,
                password: password,

            })
            return res.status(201).json({ message: 'User registered successfully' });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Server ko error' });
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Helper function to generate token and match password
        const userData = await matchPasswordAndGenerateToken(email, password);

        if (!userData) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        let userWithoutPassword;
        let token;

        if (role === "organization") {
            const organization = await Organization.findById(userData._id);
            req.session.organization = organization._id;
            token = userData.token; // assuming your helper returns a JWT token
            ({ password: _, ...userWithoutPassword } = organization.toObject());

            return res.status(200).json({
                message: "Organization logged in successfully",
                role: "organization",
                user: userWithoutPassword,
            });
        }

        if (role === "jobseeker") {
            const jobSeeker = await JobSeeker.findById(userData._id);
            req.session.jobseeker = jobSeeker._id;
            token = userData.token;
            ({ password: _, ...userWithoutPassword } = jobSeeker.toObject());

            return res.status(200).json({
                message: "Job Seeker logged in successfully",
                role: "jobseeker",
                user: userWithoutPassword,
            });
        }

        return res.status(400).json({ error: "Invalid role specified" });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ error: "Server error during login" });
    }
};
const logout = async (req, res) => {
    try {
        req.session.destroy();
        return res.json({ message: "Logged out successfully" })

    } catch (error) {
        console.error(error);
        return res.json({ message: 'Server ko successfully' });
    }
}


module.exports = { register, loginUser, logout }