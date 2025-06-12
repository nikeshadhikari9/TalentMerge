const Job = require('../../../../models/job.models');
const JobSeeker = require('../../../../models/job-seeker.models');
const { response } = require('../../../../app');


const addJob = async (req, res) => {
    try {
        const { title, description, location, jobType, skillsRequired, experienceLevel, deadline } = req.body
        if (!title || !description || !jobType || !skillsRequired) {
            return response.status(404).json({
                message: "All fields required"
            })
        }
        const organization = req.session.organization;
        const createNew = Job.create({
            title,
            description,
            location,
            jobType,
            skillsRequired,
            experienceLevel,
            postedBy: organization,
            deadline: deadline,
        })
        return res.status(201)
            .json({
                messeage: "Job created successfully"
            })
    } catch (error) {
        console.error(error);
    }
}
const seeApplicants = async (req, res) => {
    try {
        const { jobId } = req.body;

        if (!jobId) {
            return res.status(400).json({ error: "Job ID is required" });
        }

        // 1. Find job by ID
        const job = await Job.findById(jobId).populate('applicants', 'fullName email skills profilePicture');

        if (!job) {
            return res.status(404).json({ error: "Job not found" });
        }

        const orgId = req.session.organization;

        if (!orgId) {
            return res.status(403).json({ error: "Access denied – organization not logged in" });
        }

        // 3. Check if current organization owns this job
        if (job.postedBy.toString() !== orgId.toString()) {
            return res.status(403).json({ error: "You are not authorized to view applicants for this job" });
        }
        res.json({
            jobId: job._id,
            title: job.title,
            applicants: job.applicants
        });

    } catch (error) {
        console.error("Error fetching applicants:", error.message);
        res.status(500).json({ error: "Could not load applicants" });
    }
};

module.exports = {
    seeApplicants, addJob
}