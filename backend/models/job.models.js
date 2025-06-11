// src/models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    jobType: {
        type: String,
        enum: ['Internship', 'Full-time', 'Part-time', 'Freelance']
    },
    skillsRequired: [
        {
            type: String,
            trim: true
        }
    ],
    experienceLevel: {
        type: String,
        enum: ['Entry', 'Mid', 'Senior']
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: true
    },
    applicants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'JobSeeker'
        }
    ],
    deadline: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Job = mongoose.model("Job", jobSchema);
module.exports = Job;