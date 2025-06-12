const JobSeeker = require('../../../../models/job-seeker.models');
const Organization = require('../../../../models/organization.models');
const bcrypt = require('bcryptjs');

const matchPasswordAndGenerateToken = async (email, password) => {
    try {
        if (!email || !password) {
            return { success: false, error: "Email and password are required" };
        }

        // First check for organization
        const organization = await Organization.findOne({ email: email });
        if (organization) {
            const isMatch = await bcrypt.compare(password, organization.password);
            if (!isMatch) {
                return { success: false, error: "Invalid password" };
            }
            return {
                success: true,
                user: organization,
                userType: 'organization'
            };
        }

        // If not found in organization, check for jobseeker
        const jobSeeker = await JobSeeker.findOne({ email: email });
        if (jobSeeker) {
            const isMatch = await bcrypt.compare(password, jobSeeker.password);
            if (!isMatch) {
                return { success: false, error: "Invalid password" };
            }
            return {
                success: true,
                user: jobSeeker,
                userType: 'jobseeker'
            };
        }

        // If neither found
        return { success: false, error: "User not found" };

    } catch (error) {
        console.error("Error in matchPasswordAndGenerateToken:", error);
        return { success: false, error: "Internal server error" };
    }
};

module.exports = { matchPasswordAndGenerateToken };