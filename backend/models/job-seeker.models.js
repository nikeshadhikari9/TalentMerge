// src/models/JobSeeker.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const certificateSchema = new mongoose.Schema({
    certificateImage: {
        type: String,
        required: false
    },
    skillTypeCertificate: {
        type: String,
        required: false
    }
});

const jobSeekerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    certificates: [certificateSchema],
    skills: [
        {
            type: String,
            trim: true
        }
    ],
    goals: {
        type: String,
        trim: true
    },
    currentLearning: {
        type: String,
        trim: true
    },
    profilePicture: {
        type: String,
        default: ''
    },
    bio: {
        type: String
    },
    portfolioUrl: {
        type: String
    },
    githubUrl: {
        type: String
    }
}, { timestamps: true });

jobSeekerSchema.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        this.salt = salt;
        next();
    } catch (error) {
        next(error);
    }
});


const JobSeeker = mongoose.model("JobSeeker", jobSeekerSchema);
module.exports = JobSeeker;