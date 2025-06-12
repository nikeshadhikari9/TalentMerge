import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export default function UserDashboard() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('learn');
  const [isEdit, setIsEdit] = useState(false);
  const [jobForm, setJobForm] = useState({ title: '', description: '', location: '', type: '' });
  const [postedJobs, setPostedJobs] = useState([]);

  const [userData, setUserData] = useState({
    OrganizationName: 'Rojan Chandra Poudel',
    image: assets.profile_pic,
    email: 'poudelrojan05@gmail.com',
    phone: '9825396176',
    address: {
      line1: "Urlabari-9, Morang",
      line2: "Damak-12, Jhapa"
    },
  });

  const applicants = [
    { name: 'Sita Sharma', position: 'Frontend Developer', email: 'sita@example.com' },
    { name: 'Ram Gurung', position: 'Backend Developer', email: 'ram@example.com' },
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
    setPostedJobs(prev => [...prev, jobForm]);
    setJobForm({ title: '', description: '', location: '', type: '' });
    alert("Job posted successfully!");
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r p-6 flex flex-col justify-between">
        <div>
          {/* Profile Section */}
          <div className='relative w-36'>
            <img className='w-36 rounded' src={userData.image} alt="Organization" />
            {isEdit && (
              <label className='absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded cursor-pointer'>
                Change
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            )}
          </div>

          {/* Organization Name */}
          {isEdit ? (
            <input
              className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
              type='text'
              value={userData.OrganizationName}
              onChange={e => setUserData(prev => ({ ...prev, OrganizationName: e.target.value }))}
            />
          ) : (
            <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.OrganizationName}</p>
          )}

          <hr className='bg-zinc-400 h-[1px] border-none my-4' />

          {/* Contact Info */}
          <div className='text-sm text-gray-600 space-y-2'>
            {/* Email */}
            <div>
              <span className='font-semibold'>Email: </span>
              {isEdit ? (
                <input
                  type='email'
                  value={userData.email}
                  onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))}
                  className='w-full border p-1 rounded mt-1'
                />
              ) : (
                <p>{userData.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <span className='font-semibold'>Phone: </span>
              {isEdit ? (
                <input
                  type='text'
                  value={userData.phone}
                  onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                  className='w-full border p-1 rounded mt-1'
                />
              ) : (
                <p>{userData.phone}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <span className='font-semibold'>Address:</span>
              {isEdit ? (
                <>
                  <input
                    type='text'
                    placeholder='Line 1'
                    value={userData.address.line1}
                    onChange={e => setUserData(prev => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value }
                    }))}
                    className='w-full border p-1 rounded mt-1'
                  />
                  <input
                    type='text'
                    placeholder='Line 2'
                    value={userData.address.line2}
                    onChange={e => setUserData(prev => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value }
                    }))}
                    className='w-full border p-1 rounded mt-1'
                  />
                </>
              ) : (
                <p>{userData.address.line1}, {userData.address.line2}</p>
              )}
            </div>
          </div>

          <div className='mt-10'>
            <button
              className='border border-violet-700 px-8 py-2 rounded-full hover:bg-violet-700 hover:text-white transition-all'
              onClick={() => setIsEdit(prev => !prev)}
            >
              {isEdit ? 'Save Info' : 'Update Info'}
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-2 mt-10">
          <button
            className={`w-full py-2 text-white rounded-md font-semibold ${
              activeView === 'learn' ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            onClick={() => setActiveView('learn')}
          >
            Provide Job
          </button>
          <button
            className={`w-full py-2 border rounded-md flex items-center justify-center gap-2 ${
              activeView === 'jobs'
                ? 'bg-gray-200 border-blue-500'
                : 'border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => setActiveView('jobs')}
          >
            Applications
          </button>
          <button
            className={`w-full py-2 border rounded-md flex items-center justify-center gap-2 border-red-400 hover:bg-red-100`}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {activeView === 'learn' ? (
          <>
            <h1 className="text-2xl font-semibold mb-4">Post a New Job</h1>
            <form onSubmit={handleJobSubmit} className="bg-white p-6 rounded-md shadow space-y-4 max-w-lg">
              <input
                type="text"
                placeholder="Job Title"
                className="w-full p-2 border rounded"
                value={jobForm.title}
                onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                required
              />
              <textarea
                placeholder="Job Description"
                className="w-full p-2 border rounded"
                value={jobForm.description}
                onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full p-2 border rounded"
                value={jobForm.location}
                onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                required
              />
              <select
                className="w-full p-2 border rounded"
                value={jobForm.type}
                onChange={(e) => setJobForm({ ...jobForm, type: e.target.value })}
                required
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
              </select>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Post Job
              </button>
            </form>

            {postedJobs.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2">Your Posted Jobs</h2>
                <ul className="space-y-3">
                  {postedJobs.map((job, index) => (
                    <li key={index} className="bg-white p-4 rounded shadow">
                      <h3 className="font-medium">{job.title}</h3>
                      <p className="text-sm text-gray-500">{job.description}</p>
                      <p className="text-sm">{job.location} - {job.type}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-4">Job Applications</h1>
            <div className="space-y-4">
              {applicants.map((applicant, index) => (
                <div key={index} className="bg-white p-4 rounded shadow">
                  <p className="font-medium">{applicant.name}</p>
                  <p className="text-sm">{applicant.position}</p>
                  <p className="text-sm text-blue-600">{applicant.email}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
