import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/error.middleware.js";
import authRoutes from "./api/v1/auth/auth.routes.js";
import jobSeekerRoutes from "./api/v1/job-seeker/job-seeker.routes.js";
import organizationRoutes from "./api/v1/organization/organization.routes.js";

const app = express();

// CORS configuration
const corsOptions = {
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/job-seeker", jobSeekerRoutes);
app.use("/api/v1/organization", organizationRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8848;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 