<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Settings, LogOut, Edit3, Camera, MapPin, Phone, Mail, 
  Calendar, Users, BookOpen, Briefcase, Trophy, Star, Gem, 
  Play, Clock, Building, ChevronRight, Heart, Award, Target,
  Sparkles, Wand2, Crown, Shield, Mountain, Compass
} from 'lucide-react';
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Settings,
  LogOut,
  Edit3,
  Camera,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  BookOpen,
  Briefcase,
  Trophy,
  Star,
  Gem,
  Play,
  Clock,
  Building,
  ChevronRight,
  Heart,
  Award,
  Target,
  Sparkles,
  Wand2,
  Crown,
  Shield,
  Mountain,
  Compass,
} from "lucide-react";
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa

import { useToast } from "../context/ToastContext";
export default function UserDashboard() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("learn");
  const [userData, setUserData] = useState({
<<<<<<< HEAD
    name: 'Rojan Chandra Poudel',
    image: '/api/placeholder/150/150', // Using placeholder since assets might not be available
    email: 'poudelrojan05@gmail.com',
    phone: '9825396176',
=======
    name: "Rojan Chandra Poudel",
    image: "/api/placeholder/150/150",
    email: "poudelrojan05@gmail.com",
    phone: "9825396176",
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
    address: {
      line1: "Urlabari-9,Morange",
      line2: "Damak-12,Jhapa",
    },
    gender: "Male",
    dob: "2001-09-21",
  });

  const [isEdit, setIsEdit] = useState(false);
  const { showToast } = useToast();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUserData((prev) => ({ ...prev, image: imageURL }));
    }
  };

  const handleLogout = () => {
<<<<<<< HEAD
    navigate('/');
=======
    showToast("Logged out successfully", "success");
    navigate("/");
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
  };

  const roadmaps = [
    {
<<<<<<< HEAD
      title: 'React Development',
      category: 'React',
      description: 'Master React.js from basics to advanced concepts',
      topics: ['JSX and Components', 'State and Props', 'React Hooks'],
      color: 'blue',
=======
      title: "React Development",
      category: "React",
      description: "Master React.js from basics to advanced concepts",
      topics: ["JSX and Components", "State and Props", "React Hooks"],
      color: "blue",
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
      progress: 65,
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
<<<<<<< HEAD
      title: 'Node.js Backend',
      category: 'Node.js',
      description: 'Learn server-side development with Node.js',
      topics: ['Express.js Basics', 'API Development', 'Database Integration'],
      color: 'green',
=======
      title: "Node.js Backend",
      category: "Node.js",
      description: "Learn server-side development with Node.js",
      topics: ["Express.js Basics", "API Development", "Database Integration"],
      color: "green",
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
      progress: 40,
      icon: <Shield className="w-6 h-6" />,
    },
    {
<<<<<<< HEAD
      title: 'Problem Solving',
      category: 'Problem Solving',
      description: 'Develop critical thinking and algorithmic skills',
      topics: ['Algorithm Basics', 'Data Structures', 'Code Challenges'],
      color: 'purple',
=======
      title: "Problem Solving",
      category: "Problem Solving",
      description: "Develop critical thinking and algorithmic skills",
      topics: ["Algorithm Basics", "Data Structures", "Code Challenges"],
      color: "purple",
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
      progress: 80,
      icon: <Mountain className="w-6 h-6" />,
    },
    {
<<<<<<< HEAD
      title: 'Business Skills',
      category: 'Business',
      description: 'Essential business and communication skills',
      topics: ['Communication', 'Teamwork', 'Leadership'],
      color: 'gray',
=======
      title: "Business Skills",
      category: "Business",
      description: "Essential business and communication skills",
      topics: ["Communication", "Teamwork", "Leadership"],
      color: "gray",
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
      progress: 25,
      icon: <Crown className="w-6 h-6" />,
    },
  ];

  const jobs = [
    {
<<<<<<< HEAD
      title: 'Frontend Developer (React)',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      type: 'Full-time',
      salary: '$60,000 - $80,000',
      posted: '2 days ago',
    },
    {
      title: 'Backend Developer (Node.js)',
      company: 'CodeCraft',
      location: 'Kathmandu, Nepal',
      type: 'Part-time',
      salary: '$40,000 - $55,000',
      posted: '1 week ago',
    },
    {
      title: 'Junior Software Engineer',
      company: 'InnovateX',
      location: 'Remote',
      type: 'Internship',
      salary: '$25,000 - $35,000',
      posted: '3 days ago',
=======
      title: "Frontend Developer (React)",
      company: "Tech Solutions Inc.",
      location: "Remote",
      type: "Full-time",
      salary: "$60,000 - $80,000",
      posted: "2 days ago",
    },
    {
      title: "Backend Developer (Node.js)",
      company: "CodeCraft",
      location: "Kathmandu, Nepal",
      type: "Part-time",
      salary: "$40,000 - $55,000",
      posted: "1 week ago",
    },
    {
      title: "Junior Software Engineer",
      company: "InnovateX",
      location: "Remote",
      type: "Internship",
      salary: "$25,000 - $35,000",
      posted: "3 days ago",
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
    },
  ];

  const stats = [
<<<<<<< HEAD
    { label: 'Courses Completed', value: '12', icon: <Trophy className="w-6 h-6" />, color: 'text-yellow-600' },
    { label: 'Skills Learned', value: '24', icon: <Star className="w-6 h-6" />, color: 'text-blue-600' },
    { label: 'Certificates', value: '8', icon: <Award className="w-6 h-6" />, color: 'text-green-600' },
    { label: 'Hours Spent', value: '156', icon: <Clock className="w-6 h-6" />, color: 'text-purple-600' },
=======
    {
      label: "Courses Completed",
      value: "12",
      icon: <Trophy className="w-6 h-6" />,
      color: "text-yellow-600",
    },
    {
      label: "Skills Learned",
      value: "24",
      icon: <Star className="w-6 h-6" />,
      color: "text-blue-600",
    },
    {
      label: "Certificates",
      value: "8",
      icon: <Award className="w-6 h-6" />,
      color: "text-green-600",
    },
    {
      label: "Hours Spent",
      value: "156",
      icon: <Clock className="w-6 h-6" />,
      color: "text-purple-600",
    },
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Wand2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Learning Dashboard
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Profile */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="text-center">
                <div className="relative inline-block">
<<<<<<< HEAD
                  <img 
                    className="w-32 h-32 rounded-full object-cover border-4 border-purple-200 shadow-lg" 
                    src={userData.image} 
                    alt="Profile" 
=======
                  <img
                    className="w-32 h-32 rounded-full object-cover border-4 border-purple-200 shadow-lg"
                    src={userData.image}
                    alt="Profile"
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                  />
                  {isEdit && (
                    <label className="absolute bottom-2 right-2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full cursor-pointer transition-colors duration-200 shadow-lg">
                      <Camera className="w-4 h-4" />
<<<<<<< HEAD
                      <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
=======
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                    </label>
                  )}
                </div>

                {isEdit ? (
                  <input
                    className="mt-4 text-xl font-bold text-center w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2"
                    type="text"
                    value={userData.name}
<<<<<<< HEAD
                    onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
                  />
                ) : (
                  <h2 className="mt-4 text-xl font-bold text-gray-900">{userData.name}</h2>
=======
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                ) : (
                  <h2 className="mt-4 text-xl font-bold text-gray-900">
                    {userData.name}
                  </h2>
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                )}

                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => setIsEdit(!isEdit)}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors duration-200"
                  >
                    <Edit3 className="w-4 h-4" />
<<<<<<< HEAD
                    <span>{isEdit ? 'Save' : 'Edit Profile'}</span>
=======
                    <span>{isEdit ? "Save" : "Edit Profile"}</span>
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                  </button>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">{userData.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5 text-green-500" />
                  <span className="text-sm">{userData.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <div className="text-sm">
                    <div>{userData.address.line1}</div>
                    <div>{userData.address.line2}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">{userData.dob}</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
<<<<<<< HEAD
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 text-center">
                    <div className={`${stat.color} flex justify-center mb-1`}>
                      {stat.icon}
                    </div>
                    <div className="text-lg font-bold text-gray-900">{stat.value}</div>
=======
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 text-center"
                  >
                    <div className={`${stat.color} flex justify-center mb-1`}>
                      {stat.icon}
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {stat.value}
                    </div>
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Navigation Tabs */}
            <div className="flex space-x-4 mb-8">
              {[
<<<<<<< HEAD
                { id: 'learn', label: 'Learning Paths', icon: <BookOpen className="w-5 h-5" /> },
                { id: 'jobs', label: 'Job Board', icon: <Briefcase className="w-5 h-5" /> },
                { id: 'profile', label: 'My Profile', icon: <User className="w-5 h-5" /> },
              ].map(tab => (
=======
                {
                  id: "learn",
                  label: "Learning Paths",
                  icon: <BookOpen className="w-5 h-5" />,
                },
                {
                  id: "jobs",
                  label: "Job Board",
                  icon: <Briefcase className="w-5 h-5" />,
                },
                {
                  id: "profile",
                  label: "My Profile",
                  icon: <User className="w-5 h-5" />,
                },
              ].map((tab) => (
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                <button
                  key={tab.id}
                  onClick={() => setActiveView(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeView === tab.id
<<<<<<< HEAD
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
=======
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Learning Paths View */}
<<<<<<< HEAD
            {activeView === 'learn' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">Continue Your Journey</h2>
                  <p className="text-purple-100 mb-4">Master new skills and unlock exciting opportunities</p>
=======
            {activeView === "learn" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">
                    Continue Your Journey
                  </h2>
                  <p className="text-purple-100 mb-4">
                    Master new skills and unlock exciting opportunities
                  </p>
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                  <div className="flex items-center space-x-4">
                    <Compass className="w-8 h-8" />
                    <span className="text-lg">4 Active Learning Paths</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {roadmaps.map((roadmap, index) => (
<<<<<<< HEAD
                    <div key={index} className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl ${
                          roadmap.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          roadmap.color === 'green' ? 'bg-green-100 text-green-600' :
                          roadmap.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {roadmap.icon}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          roadmap.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                          roadmap.color === 'green' ? 'bg-green-100 text-green-800' :
                          roadmap.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {roadmap.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{roadmap.title}</h3>
                      <p className="text-gray-600 mb-4">{roadmap.description}</p>
                      
=======
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl ${
                            roadmap.color === "blue"
                              ? "bg-blue-100 text-blue-600"
                              : roadmap.color === "green"
                              ? "bg-green-100 text-green-600"
                              : roadmap.color === "purple"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {roadmap.icon}
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            roadmap.color === "blue"
                              ? "bg-blue-100 text-blue-800"
                              : roadmap.color === "green"
                              ? "bg-green-100 text-green-800"
                              : roadmap.color === "purple"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {roadmap.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {roadmap.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {roadmap.description}
                      </p>

>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Progress</span>
                          <span>{roadmap.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
<<<<<<< HEAD
                          <div 
                            className={`h-2 rounded-full ${
                              roadmap.color === 'blue' ? 'bg-blue-500' :
                              roadmap.color === 'green' ? 'bg-green-500' :
                              roadmap.color === 'purple' ? 'bg-purple-500' :
                              'bg-gray-500'
=======
                          <div
                            className={`h-2 rounded-full ${
                              roadmap.color === "blue"
                                ? "bg-blue-500"
                                : roadmap.color === "green"
                                ? "bg-green-500"
                                : roadmap.color === "purple"
                                ? "bg-purple-500"
                                : "bg-gray-500"
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                            }`}
                            style={{ width: `${roadmap.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {roadmap.topics.slice(0, 2).map((topic, topicIndex) => (
<<<<<<< HEAD
                          <div key={topicIndex} className="flex items-center space-x-2 text-sm text-gray-600">
=======
                          <div
                            key={topicIndex}
                            className="flex items-center space-x-2 text-sm text-gray-600"
                          >
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>

<<<<<<< HEAD
                      <button className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-medium transition-colors duration-200 ${
                        roadmap.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                        roadmap.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                        roadmap.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                        'bg-gray-600 hover:bg-gray-700 text-white'
                      }`}>
=======
                      <button
                        className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-medium transition-colors duration-200 ${
                          roadmap.color === "blue"
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : roadmap.color === "green"
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : roadmap.color === "purple"
                            ? "bg-purple-600 hover:bg-purple-700 text-white"
                            : "bg-gray-600 hover:bg-gray-700 text-white"
                        }`}
                      >
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                        <Play className="w-4 h-4" />
                        <span>Continue Learning</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Jobs View */}
<<<<<<< HEAD
            {activeView === 'jobs' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">Discover Opportunities</h2>
                  <p className="text-green-100 mb-4">Find your next career opportunity</p>
                  <div className="flex items-center space-x-4">
                    <Target className="w-8 h-8" />
                    <span className="text-lg">{jobs.length} New Opportunities</span>
=======
            {activeView === "jobs" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">
                    Discover Opportunities
                  </h2>
                  <p className="text-green-100 mb-4">
                    Find your next career opportunity
                  </p>
                  <div className="flex items-center space-x-4">
                    <Target className="w-8 h-8" />
                    <span className="text-lg">
                      {jobs.length} New Opportunities
                    </span>
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                  </div>
                </div>

                <div className="space-y-4">
                  {jobs.map((job, index) => (
<<<<<<< HEAD
                    <div key={index} className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
=======
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {job.title}
                          </h3>
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                          <div className="flex items-center space-x-4 text-gray-600 mb-2">
                            <div className="flex items-center space-x-1">
                              <Building className="w-4 h-4" />
                              <span>{job.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                              {job.type}
                            </span>
<<<<<<< HEAD
                            <span className="text-green-600 font-semibold">{job.salary}</span>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{job.posted}</span>
                      </div>
                      
=======
                            <span className="text-green-600 font-semibold">
                              {job.salary}
                            </span>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {job.posted}
                        </span>
                      </div>

>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                      <div className="flex space-x-3">
                        <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-medium transition-colors duration-200">
                          Apply Now
                        </button>
                        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile View */}
<<<<<<< HEAD
            {activeView === 'profile' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">My Profile</h2>
                  <p className="text-indigo-100">Manage your personal information and preferences</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={userData.name}
                        onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={userData.email}
                        onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={userData.phone}
                        onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                      <input
                        type="date"
                        value={userData.dob}
                        onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 1</label>
                      <input
                        type="text"
                        value={userData.address.line1}
                        onChange={e => setUserData(prev => ({ 
                          ...prev, 
                          address: { ...prev.address, line1: e.target.value }
                        }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 2</label>
                      <input
                        type="text"
                        value={userData.address.line2}
                        onChange={e => setUserData(prev => ({ 
                          ...prev, 
                          address: { ...prev.address, line2: e.target.value }
                        }))}
=======
            {activeView === "profile" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">My Profile</h2>
                  <p className="text-indigo-100">
                    Manage your personal information and preferences
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={userData.name}
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={userData.phone}
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={userData.dob}
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            dob: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        value={userData.address.line1}
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            address: { ...prev.address, line1: e.target.value },
                          }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        value={userData.address.line2}
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            address: { ...prev.address, line2: e.target.value },
                          }))
                        }
>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>
<<<<<<< HEAD
                  
=======

>>>>>>> 2e78da3cfbf92293f8fecc752191c3d8e33c02fa
                  <div className="mt-8 flex justify-end">
                    <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-200">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
