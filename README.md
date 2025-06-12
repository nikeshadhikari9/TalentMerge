# TalentMerge

TalentMerge is a modern web application designed to bridge the gap between job seekers and organizations, providing a seamless platform for talent acquisition and career development.

## 🌟 Features

### For Job Seekers

- Create and manage professional profiles
- Browse and apply for job opportunities
- Track application status
- Access personalized career roadmaps
- Receive real-time notifications for job matches
- Build and showcase professional portfolios

### For Organizations

- Post and manage job listings
- Search and filter candidate profiles
- Review applications and manage hiring pipeline
- Access detailed candidate insights
- Communicate with potential candidates
- Track recruitment metrics

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS for styling
- React Router for navigation
- Context API for state management
- Custom toast notifications for user feedback

### Backend

- Node.js
- Express.js
- MongoDB for database
- JWT for authentication
- RESTful API architecture

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/TalentMerge.git
cd TalentMerge
```

2. Install dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables

```bash
# In the backend directory, create a .env file with:
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start the development servers

```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend server (from frontend directory)
npm start
```

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication. Users can:

- Register as either a job seeker or organization
- Login with email and password
- Access protected routes based on their role
- Maintain session persistence

## 🎨 UI/UX Features

- Responsive design for all devices
- Modern and clean interface
- Intuitive navigation
- Real-time feedback with toast notifications
- Loading states and error handling
- Form validation and error messages
