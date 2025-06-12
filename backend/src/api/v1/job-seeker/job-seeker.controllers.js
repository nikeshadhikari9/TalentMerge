const multer = require('multer');
const path = require('path');
const JobSeeker = require('../../../../models/job-seeker.models');
const Job = require('../../../../models/job.models');
const mongoose = require('mongoose');

// Initialize or update learning track
const initializeLearningTrack = async (req, res) => {
    const { userId, skillName, levelType } = req.body;
    const levelNumber = 1;

    // Validate required fields
    if (!userId || !skillName || !levelType) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: "Invalid user ID format" });
    }

    // Validate level type
    const validLevelTypes = ["Beginner", "Intermediate", "Advanced"];
    if (!validLevelTypes.includes(levelType)) {
        return res.status(400).json({ error: "Invalid level type. Must be one of: Beginner, Intermediate, Advanced" });
    }

    try {
        const jobSeeker = await JobSeeker.findById(userId);
        if (!jobSeeker) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if track already exists
        const existingTrack = jobSeeker.learningTracks.find(
            t => t.skillName === skillName && t.levelType === levelType
        );

        if (existingTrack) {
            return res.status(400).json({ error: "Learning track already exists" });
        }

        // Create new track
        const newTrack = {
            skillName,
            levelType,
            levelNumber,
            completed: false
        };

        jobSeeker.learningTracks.push(newTrack);
        await jobSeeker.save();

        return res.json({
            message: "Learning track initialized successfully",
            track: newTrack
        });

    } catch (error) {
        console.error("Error initializing learning track:", error.message);
        return res.status(500).json({ error: "Could not initialize learning track" });
    }
};

// Complete level and handle progression
const completeLevel = async (req, res) => {
    const { userId, skillName, levelType, levelNumber } = req.body;

    // Validate required fields
    if (!userId || !skillName || !levelType || !levelNumber) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: "Invalid user ID format" });
    }

    // Validate level type
    const validLevelTypes = ["Beginner", "Intermediate", "Advanced"];
    if (!validLevelTypes.includes(levelType)) {
        return res.status(400).json({ error: "Invalid level type. Must be one of: Beginner, Intermediate, Advanced" });
    }

    // Validate level number
    if (typeof levelNumber !== 'number' || levelNumber < 1 || levelNumber > 10) {
        return res.status(400).json({ error: "Level number must be between 1 and 10" });
    }

    try {
        const jobSeeker = await JobSeeker.findById(userId);
        if (!jobSeeker) {
            return res.status(404).json({ error: "User not found" });
        }

        // Find current learning track
        let track = jobSeeker.learningTracks.find(
            t => t.skillName === skillName && t.levelType === levelType
        );

        // If track doesn't exist, create it
        if (!track) {
            track = {
                skillName,
                levelType,
                levelNumber: 1,
                completed: false
            };
            jobSeeker.learningTracks.push(track);
            await jobSeeker.save();
        }

        // Check if current level is already at maximum
        if (track.levelNumber >= 10) {
            return res.status(400).json({
                error: `Maximum level (10) already reached for ${levelType} ${skillName}`,
                currentLevel: track.levelNumber,
                completed: track.completed
            });
        }

        // Simulate quiz success (you can replace this with actual quiz logic)
        const allAnswersCorrect = true;
        if (!allAnswersCorrect) {
            return res.json({ message: "Keep practicing! Some answers were incorrect." });
        }

        // Handle level completion based on current level
        if (levelType === "Beginner" && levelNumber === 10) {
            // Update current track
            await JobSeeker.findByIdAndUpdate(
                userId,
                {
                    $set: {
                        "learningTracks.$[track].completed": true,
                        "learningTracks.$[track].levelNumber": 10
                    }
                },
                {
                    arrayFilters: [
                        { "track.skillName": skillName, "track.levelType": "Beginner" }
                    ]
                }
            );

            // Add badge and new track
            const badge = {
                name: `${skillName} Beginner`,
                description: `Completed all levels in ${skillName} beginner track.`,
                earnedAt: new Date(),
                iconUrl: `/badges/${skillName.toLowerCase()}-beginner.png`
            };

            await JobSeeker.findByIdAndUpdate(
                userId,
                {
                    $push: { badges: badge },
                    $addToSet: {
                        "learningTracks": {
                            skillName,
                            levelType: "Intermediate",
                            levelNumber: 1,
                            completed: false
                        }
                    }
                },
                { new: true }
            );

            return res.json({
                message: "🎉 You've completed Beginner level!",
                badge,
                nextLevel: {
                    levelType: "Intermediate",
                    levelNumber: 1,
                    skillName
                }
            });
        }

        if (levelType === "Intermediate" && levelNumber === 10) {
            // Update current track
            await JobSeeker.findByIdAndUpdate(
                userId,
                {
                    $set: {
                        "learningTracks.$[track].completed": true,
                        "learningTracks.$[track].levelNumber": 10
                    }
                },
                {
                    arrayFilters: [
                        { "track.skillName": skillName, "track.levelType": "Intermediate" }
                    ]
                }
            );

            // Add badge and new track
            const badge = {
                name: `${skillName} Intermediate`,
                description: `Completed all levels in ${skillName} intermediate track.`,
                earnedAt: new Date(),
                iconUrl: `/badges/${skillName.toLowerCase()}-intermediate.png`
            };

            await JobSeeker.findByIdAndUpdate(
                userId,
                {
                    $push: { badges: badge },
                    $addToSet: {
                        "learningTracks": {
                            skillName,
                            levelType: "Advanced",
                            levelNumber: 1,
                            completed: false
                        }
                    }
                },
                { new: true }
            );

            return res.json({
                message: "🎉 You've completed Intermediate level!",
                badge,
                nextLevel: {
                    levelType: "Advanced",
                    levelNumber: 1,
                    skillName
                }
            });
        }

        if (levelType === "Advanced" && levelNumber === 10) {
            // Update current track
            await JobSeeker.findByIdAndUpdate(
                userId,
                {
                    $set: {
                        "learningTracks.$[track].completed": true,
                        "learningTracks.$[track].levelNumber": 10
                    }
                },
                {
                    arrayFilters: [
                        { "track.skillName": skillName, "track.levelType": "Advanced" }
                    ]
                }
            );

            // Add badge and certificate
            const badge = {
                name: `${skillName} Advanced`,
                description: `Completed all levels in ${skillName} advanced track.`,
                earnedAt: new Date(),
                iconUrl: `/badges/${skillName.toLowerCase()}-advanced.png`
            };

            const certificate = {
                certificateImage: `/certificates/${skillName.toLowerCase()}-certificate.png`,
                skillTypeCertificate: `${skillName} Full Track Certificate`
            };

            await JobSeeker.findByIdAndUpdate(
                userId,
                {
                    $push: {
                        badges: badge,
                        certificates: certificate
                    }
                },
                { new: true }
            );

            return res.json({
                message: "🎓 Congratulations! You've completed the full track!",
                badge,
                certificate
            });
        }
        // Regular level completion
        const updatedJobSeeker = await JobSeeker.findOneAndUpdate(
            {
                _id: userId,
                "learningTracks.skillName": skillName,
                "learningTracks.levelType": levelType
            },
            {
                $set: {
                    "learningTracks.$.levelNumber": levelNumber + 1
                }
            },
            { new: true }
        );

        return res.json({
            message: `✅ Level ${levelNumber} completed! Now on level ${levelNumber + 1}`,
            nextLevel: {
                levelType,
                levelNumber: levelNumber + 1,
                skillName
            }
        });

    } catch (error) {
        console.error("Error completing level:", error.message);
        return res.status(500).json({ error: "Could not update progress" });
    }
};

const getJobSeekerProfile = async (req, res) => {
    try {
        // Check if user is authenticated
        if (!req.session.jobseeker || !req.session.jobseeker._id) {
            return res.status(401).json({ error: "Unauthorized - Please login" });
        }

        // Find user and exclude sensitive data
        const user = await JobSeeker.findById(req.session.jobseeker._id)
            .select('-password -salt')
            .populate('learningTracks')
            .populate('badges')
            .populate('certificates');

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({
            success: true,
            user: {
                ...user.toObject(),
                learningProgress: {
                    totalTracks: user.learningTracks.length,
                    completedTracks: user.learningTracks.filter(track => track.completed).length,
                    totalBadges: user.badges.length,
                    totalCertificates: user.certificates.length
                }
            }
        });
    } catch (error) {
        console.error("Error fetching job seeker profile:", error);
        return res.status(500).json({
            success: false,
            error: "Failed to fetch profile"
        });
    }
};

// Set up Multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '../../../../public/resume');
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = file.originalname.split('.').pop();
        cb(null, 'resume-' + uniqueSuffix + '.' + ext);
    }
});

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        // Accept only PDF files
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed!'), false);
        }
    },
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

// POST /api/v1/jobseeker/upload-resume
const resumeUpload = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                error: "No file uploaded or invalid file type"
            });
        }
        const jobseekerId = req.session.jobseeker._id;
        const resumeUrl = `/resume/${req.file.filename}`;

        await JobSeeker.findByIdAndUpdate(jobseekerId, {
            resumeUrl
        });

        return res.status(200).json({
            success: true,
            message: "Resume uploaded successfully!",
            resumeUrl
        });
    } catch (error) {
        console.error("Error uploading resume:", error.message);
        return res.status(500).json({
            success: false,
            error: "Could not save resume link"
        });
    }
};
const applyJob = async (req, res) => {
    try {
        const { jobId } = req.body;

        // Get job seeker ID from session
        const jobSeekerId = req.session.jobseeker;

        if (!jobId || !jobSeekerId) {
            return res.status(400).json({ error: "Missing jobId or user not logged in" });
        }

        // Find job and add applicant
        const updatedJob = await Job.findByIdAndUpdate(
            jobId,
            {
                $push: { applicants: jobSeekerId }
            },
            { new: true }
        );

        if (!updatedJob) {
            return res.status(404).json({ error: "Job not found" });
        }

        res.json({
            message: "Successfully applied!",
            job: {
                title: updatedJob.title,
                applicantsCount: updatedJob.applicants.length
            }
        });

    } catch (error) {
        console.error("Error applying to job:", error.message);
        res.status(500).json({ error: "Could not apply to job" });
    }
};

module.exports = {
    initializeLearningTrack,
    completeLevel,
    getJobSeekerProfile, resumeUpload, upload, applyJob
};