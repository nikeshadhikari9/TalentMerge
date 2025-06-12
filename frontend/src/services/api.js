import axios from "axios";

const baseURL = "http://localhost:8848/api/v1";

// Create axios instance with default config
const api = axios.create({
    baseURL,
    withCredentials: true, // Important for cookies
    headers: {
        "Content-Type": "application/json",
    },
});

// Auth API calls
export const authApi = {
    login: (credentials) => api.post("/auth/login", credentials),
    register: (userData) => api.post("/auth/register", userData),
    logout: () => api.post("/auth/logout"),
    getCurrentUser: () => api.get("/auth/getUser"),
    viewProfile: () => api.get("/auth/profile"),
};

// Job Seeker API calls
export const jobSeekerApi = {
    getProfile: () => api.get("/job-seeker/view-profile"),
    uploadResume: (formData) => api.post("/job-seeker/upload-resume", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }),
    initializeLearningTrack: (trackId) => api.post("/job-seeker/initialize-level", { trackId }),
    completeLevel: (levelId) => api.put("/job-seeker/complete-level", { levelId }),
    applyToJob: (jobId) => api.post("/job-seeker/apply", { jobId }),
};

// Organization API calls
export const organizationApi = {
    addJob: (jobData) => api.post("/organization/jobs", jobData),
    updateJob: (jobId, jobData) => api.put(`/organization/jobs/${jobId}`, jobData),
    deleteJob: (jobId) => api.delete(`/organization/jobs/${jobId}`),
    getJobs: () => api.get("/organization/jobs"),
    getJobApplications: (jobId) => api.get(`/organization/jobs/${jobId}/applications`),
};

// Common API calls
export const commonApi = {
    searchJobs: (query) => api.get("/jobs/search", { params: query }),
    getJobDetails: (jobId) => api.get(`/jobs/${jobId}`),
    getCategories: () => api.get("/categories"),
    getSkills: () => api.get("/skills"),
};

// Error interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 && window.location.pathname !== "/login") {
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default api; 