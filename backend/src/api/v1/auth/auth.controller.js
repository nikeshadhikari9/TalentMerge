const JobSeeker = require('../../../../models/job-seeker.models');
const Organization = require('../../../../models/organization.models');
const { matchPasswordAndGenerateToken } = require('./auth.service');
const register = async (req, res) => {
    try {
        const { fullName, username, email, password, role } = req.body;
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
            return res.status(201).json({ message: 'Organization registered successfully', role: "organization" });
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
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: "Email and password are required"
            });
        }

        // Check credentials
        const result = await matchPasswordAndGenerateToken(email, password);

        if (!result.success) {
            return res.status(401).json({
                success: false,
                error: result.error
            });
        }

        // Set user data in session based on user type
        if (result.userType === 'organization') {
            // For organization, exclude sensitive data
            const { password, salt, ...organizationData } = result.user.toObject();
            req.session.organization = organizationData;
        } else if (result.userType === 'jobseeker') {
            // For job seeker, exclude sensitive data
            const { password, salt, ...jobseekerData } = result.user.toObject();
            req.session.jobseeker = jobseekerData;
        }

        // Send response
        return res.status(200).json({
            success: true,
            role: result.userType,
            message: "Login successful",
            user: {
                id: result.user._id,
                email: result.user.email,
                userType: result.userType,
                fullName: result.user.fullName || result.user.organizationName
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error"
        });
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
const getUser = async (req, res) => {
    try {
        if (!req.session.jobseeker || !req.session.organization) {
            return res.status(401).json({
                message: "User not LoggedIn"
            })
        } else if (req.session.jobseeker) {
            const user = req.session.jobseeker;
            res.status(200).json({
                message: "User Logged In",
                user
            })
        }
        else {
            const user = req.session.organization;
            res.status(200).json({
                message: "User Logged In",
                user
            })
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports = { register, login, logout, getUser }