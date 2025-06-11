// src/models/JobSeeker.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

// Schema for learning progress
const learningTrackSchema = new mongoose.Schema({
    skillName: {
        type: String,
        required: true
    },
    levelType: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
        required: true
    },
    levelNumber: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// Schema for badges
const badgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    earnedAt: {
        type: Date,
        default: Date.now
    },
    iconUrl: {
        type: String
    }
});

// Main Job Seeker Schema
const jobSeekerSchema = new mongoose.Schema(
    {
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
        },
        // 👇 Add these two new arrays
        learningTracks: [learningTrackSchema],
        badges: [badgeSchema]
    },
    { timestamps: true }
);

// Hash password before saving
jobSeekerSchema.pre("save", async function (next) {
    try {
        // Only run if password is modified (or is new)
        if (!this.isModified("password")) return next();

        // Generate salt and hash
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        this.salt = salt;
        next();
    } catch (error) {
        next(error);
    }
});

// Create and export model
const JobSeeker = mongoose.model("JobSeeker", jobSeekerSchema);
module.exports = JobSeeker;