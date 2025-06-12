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


module.exports = {
    addJob
}