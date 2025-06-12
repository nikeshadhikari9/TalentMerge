
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrganizationDashboard() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('overview');
  const [isEdit, setIsEdit] = useState(false);
  const [jobForm, setJobForm] = useState({ title: '', description: '', location: '', type: '', salary: '' });
  const [postedJobs, setPostedJobs] = useState([
    { id: 1, title: 'Frontend Developer', location: 'Remote', type: 'Full-time', applicants: 12, status: 'Active' },
    { id: 2, title: 'Backend Developer', location: 'Kathmandu', type: 'Full-time', applicants: 8, status: 'Active' }
  ]);

  const [userData, setUserData] = useState({
    OrganizationName: 'Rojan Chandra Poudel',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    email: 'poudelrojan05@gmail.com',
    phone: '9825396176',
    website: 'www.rojanpoudel.com',
    address: {
      line1: "Urlabari-9, Morang",
      line2: "Damak-12, Jhapa"
    },
    description: 'Leading technology solutions provider focused on innovation and excellence.',
    founded: '2020',
    employees: '50-100'
  });

  const applicants = [
    { id: 1, name: 'Sita Sharma', position: 'Frontend Developer', email: 'sita@example.com', status: 'Pending', experience: '3 years' },
    { id: 2, name: 'Ram Gurung', position: 'Backend Developer', email: 'ram@example.com', status: 'Interviewed', experience: '5 years' },
    { id: 3, name: 'Maya Thapa', position: 'UI/UX Designer', email: 'maya@example.com', status: 'Shortlisted', experience: '2 years' },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUserData(prev => ({ ...prev, image: imageURL }));
    }
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleJobSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: postedJobs.length + 1,
      ...jobForm,
      applicants: 0,
      status: 'Active'
    };
    setPostedJobs(prev => [...prev, newJob]);
    setJobForm({ title: '', description: '', location: '', type: '', salary: '' });
    alert("Job posted successfully!");
  };

  const handleSaveProfile = () => {
    setIsEdit(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Organization Dashboard</h1>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
              {/* Profile Section */}
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <img 
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-100" 
                    src={userData.image} 
                    alt="Organization" 
                  />
                  {isEdit && (
                    <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                    </label>
                  )}
                </div>

                {isEdit ? (
                  <input
                    className="text-xl font-bold text-gray-900 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 w-full text-center"
                    type="text"
                    value={userData.OrganizationName}
                    onChange={e => setUserData(prev => ({ ...prev, OrganizationName: e.target.value }))}
                  />
                ) : (
                  <h2 className="text-xl font-bold text-gray-900">{userData.OrganizationName}</h2>
                )}
              </div>

              <div className="space-y-4 text-sm">
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {isEdit ? (
                    <input
                      type="email"
                      value={userData.email}
                      onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                    />
                  ) : (
                    <span className="text-gray-600">{userData.email}</span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {isEdit ? (
                    <input
                      type="text"
                      value={userData.phone}
                      onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                    />
                  ) : (
                    <span className="text-gray-600">{userData.phone}</span>
                  )}
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex-1">
                    {isEdit ? (
                      <>
                        <input
                          type="text"
                          value={userData.address.line1}
                          onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value }}))}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2"
                          placeholder="Address Line 1"
                        />
                        <input
                          type="text"
                          value={userData.address.line2}
                          onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value }}))}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                          placeholder="Address Line 2"
                        />
                      </>
                    ) : (
                      <div className="text-gray-600">
                        <div>{userData.address.line1}</div>
                        <div>{userData.address.line2}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                {isEdit ? (
                  <>
                    <button 
                      onClick={handleSaveProfile}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      Save
                    </button>
                    <button 
                      onClick={() => setIsEdit(false)}
                      className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => setIsEdit(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    Edit Profile
                  </button>
                )}
              </div>

              {/* Navigation */}
              <nav className="mt-8 space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: '📊' },
                  { id: 'jobs', label: 'Job Management', icon: '💼' },
                  { id: 'applicants', label: 'Applicants', icon: '👥' },
                  { id: 'analytics', label: 'Analytics', icon: '📈' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeView === item.id 
                        ? 'bg-blue-100 text-blue-700 shadow-md' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeView === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Active Jobs</p>
                        <p className="text-3xl font-bold text-blue-600">{postedJobs.length}</p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Total Applicants</p>
                        <p className="text-3xl font-bold text-green-600">{applicants.length}</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-xl">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Interviews</p>
                        <p className="text-3xl font-bold text-purple-600">12</p>
                      </div>
                      <div className="bg-purple-100 p-3 rounded-xl">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h6m-6 0l-.5 9a2 2 0 002 2h3a2 2 0 002-2L16 7m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Hired</p>
                        <p className="text-3xl font-bold text-orange-600">5</p>
                      </div>
                      <div className="bg-orange-100 p-3 rounded-xl">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { action: 'New application received', job: 'Frontend Developer', time: '2 hours ago', type: 'application' },
                      { action: 'Interview scheduled', job: 'Backend Developer', time: '5 hours ago', type: 'interview' },
                      { action: 'Job posted successfully', job: 'UI/UX Designer', time: '1 day ago', type: 'job' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === 'application' ? 'bg-blue-100 text-blue-600' :
                          activity.type === 'interview' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {activity.type === 'application' ? '📋' : activity.type === 'interview' ? '🎯' : '💼'}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-500">{activity.job} • {activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeView === 'jobs' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-gray-900">Job Management</h2>
                </div>

                {/* Post New Job Form */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Post New Job</h3>
                  <form onSubmit={handleJobSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Job Title"
                      value={jobForm.title}
                      onChange={e => setJobForm(prev => ({ ...prev, title: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      value={jobForm.location}
                      onChange={e => setJobForm(prev => ({ ...prev, location: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <select
                      value={jobForm.type}
                      onChange={e => setJobForm(prev => ({ ...prev, type: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Job Type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Salary Range"
                      value={jobForm.salary}
                      onChange={e => setJobForm(prev => ({ ...prev, salary: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <textarea
                      placeholder="Job Description"
                      value={jobForm.description}
                      onChange={e => setJobForm(prev => ({ ...prev, description: e.target.value }))}
                      className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="submit"
                      className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                    >
                      Post Job
                    </button>
                  </form>
                </div>

                {/* Posted Jobs */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Posted Jobs</h3>
                  <div className="space-y-4">
                    {postedJobs.map(job => (
                      <div key={job.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-lg text-gray-900">{job.title}</h4>
                            <p className="text-gray-600 mt-1">{job.location} • {job.type}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <span>{job.applicants} applicants</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {job.status}
                              </span>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                            <button className="text-red-600 hover:text-red-800 font-medium">Delete</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeView === 'applicants' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Applicant Management</h2>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Position</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {applicants.map(applicant => (
                          <tr key={applicant.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div>
                                <div className="font-medium text-gray-900">{applicant.name}</div>
                                <div className="text-sm text-gray-500">{applicant.email}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">{applicant.position}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{applicant.experience}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                applicant.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                applicant.status === 'Interviewed' ? 'bg-blue-100 text-blue-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {applicant.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm space-x-2">
                              <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
                              <button className="text-green-600 hover:text-green-800 font-medium">Interview</button>
                              <button className="text-red-600 hover:text-red-800 font-medium">Reject</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeView === 'analytics' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Analytics & Reports</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Hiring Funnel</h3>
                    <div className="space-y-4">
                      {[
                        { stage: 'Applications', count: 150, percentage: 100 },
                        { stage: 'Screening', count: 75, percentage: 50 },
                        { stage: 'Interviews', count: 30, percentage: 20 },
                        { stage: 'Offers', count: 12, percentage: 8 },
                        { stage: 'Hired', count: 8, percentage: 5.3 }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">{item.stage}</span>
                          <div className="flex items-center space-x-3">
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${item.percentage}%` }}
                              />
                            </div>
                            <span className="text-sm font-bold text-gray-900 w-8">{item.count}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Job Performance</h3>
                    <div className="space-y-4">
                      {postedJobs.map(job => (
                        <div key={job.id} className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-medium text-gray-900">{job.title}</h4>
                          <div className="flex justify-between text-sm text-gray-600 mt-1">
                            <span>{job.applicants} applications</span>
                            <span>85% match rate</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Monthly Overview</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">45</div>
                      <div className="text-sm text-gray-600">Applications</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">12</div>
                      <div className="text-sm text-gray-600">Interviews</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">5</div>
                      <div className="text-sm text-gray-600">Offers</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">3</div>
                      <div className="text-sm text-gray-600">Hired</div>
                    </div>
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
