const JobSeeker = require('../../../../models/job-seeker.models');
const mongoose = require('mongoose');

// Initialize or update learning track
const initializeLearningTrack = async (req, res) => {
    const { userId, skillName, levelType } = req.body;
    const levelNumber = 1;
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
        return res.status(400).json({ error: "Invalid level type" });
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

    try {
        const jobSeeker = await JobSeeker.findById(userId);
        if (!jobSeeker) {
            return res.status(404).json({ error: "User not found" });
        }

        // Find current learning track
        const track = jobSeeker.learningTracks.find(
            t => t.skillName === skillName && t.levelType === levelType
        );

        if (!track) {
            return res.status(404).json({ error: "Learning track not found" });
        }

        // Simulate quiz success (you can replace this with actual quiz logic)
        const allAnswersCorrect = true;
        if (!allAnswersCorrect) {
            return res.json({ message: "Keep practicing! Some answers were incorrect." });
        }

        // Handle level completion based on current level
        if (levelType === "Beginner" && levelNumber === 10) {
            return handleBeginnerCompletion(userId, skillName, res);
        }

        if (levelType === "Intermediate" && levelNumber === 10) {
            return handleIntermediateCompletion(userId, skillName, res);
        }

        if (levelType === "Advanced" && levelNumber === 10) {
            return handleAdvancedCompletion(userId, skillName, res);
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

// Helper function to handle Beginner level completion
const handleBeginnerCompletion = async (userId, skillName, res) => {
    try {
        // First, update the existing track
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

        // Then, add the badge and new track
        const badge = {
            name: `${skillName} Beginner`,
            description: `Completed all levels in ${skillName} beginner track.`,
            earnedAt: new Date(),
            iconUrl: `/badges/${skillName.toLowerCase()}-beginner.png`
        };

        const updatedJobSeeker = await JobSeeker.findByIdAndUpdate(
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
    } catch (error) {
        console.error("Error in Beginner completion:", error);
        return res.status(500).json({ error: "Failed to update progress" });
    }
};

// Helper function to handle Intermediate level completion
const handleIntermediateCompletion = async (userId, skillName, res) => {
    try {
        // First, update the existing track
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

        // Then, add the badge and new track
        const badge = {
            name: `${skillName} Intermediate`,
            description: `Completed all levels in ${skillName} intermediate track.`,
            earnedAt: new Date(),
            iconUrl: `/badges/${skillName.toLowerCase()}-intermediate.png`
        };

        const updatedJobSeeker = await JobSeeker.findByIdAndUpdate(
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
    } catch (error) {
        console.error("Error in Intermediate completion:", error);
        return res.status(500).json({ error: "Failed to update progress" });
    }
};

// Helper function to handle Advanced level completion
const handleAdvancedCompletion = async (userId, skillName, res) => {
    try {
        // First, update the existing track
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

        // Then, add the badge and certificate
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

        const updatedJobSeeker = await JobSeeker.findByIdAndUpdate(
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
    } catch (error) {
        console.error("Error in Advanced completion:", error);
        return res.status(500).json({ error: "Failed to update progress" });
    }
};

module.exports = {
    initializeLearningTrack,
    completeLevel
};