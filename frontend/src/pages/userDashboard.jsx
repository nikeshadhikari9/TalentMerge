import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

export default function UserDashboard() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('learn');
  const [userData, setUserData] = useState({
    name: 'Rojan Chandra Poudel',
    image: assets.profile_pic,
    email: 'poudelrojan05@gmail.com',
    phone: '9825396176',
    address: {
      line1: "Urlabari-9,Morange",
      line2: "Damak-12,Jhapa"
    },
    gender: 'Male',
    dob: '2001-09-21'
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUserData(prev => ({ ...prev, image: imageURL }));
    }
  };

  const handleLogout = () => {
    // Clear any session/local storage if needed
    // localStorage.removeItem("user");
    navigate('/'); // Redirect to homepage
  };

  const roadmaps = [
    {
      title: 'React Development',
      category: 'React',
      description: 'Master React.js from basics to advanced concepts',
      topics: ['JSX and Components', 'State and Props', 'React Hooks'],
      color: 'blue',
    },
    {
      title: 'Node.js Backend',
      category: 'Node.js',
      description: 'Learn server-side development with Node.js',
      topics: ['Express.js Basics', 'API Development', 'Database Integration'],
      color: 'green',
    },
    {
      title: 'Problem Solving',
      category: 'Problem Solving',
      description: 'Develop critical thinking and algorithmic skills',
      topics: ['Algorithm Basics', 'Data Structures', 'Code Challenges'],
      color: 'purple',
    },
    {
      title: 'Business Skills',
      category: 'Business',
      description: 'Essential business and communication skills',
      topics: ['Communication', 'Teamwork', 'Leadership'],
      color: 'gray',
    },
  ];

  const jobs = [
    {
      title: 'Frontend Developer (React)',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Backend Developer (Node.js)',
      company: 'CodeCraft',
      location: 'Kathmandu, Nepal',
      type: 'Part-time',
    },
    {
      title: 'Junior Software Engineer',
      company: 'InnovateX',
      location: 'Remote',
      type: 'Internship',
    },
  ];

  const colorMap = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    gray: 'bg-gray-600 hover:bg-gray-700',
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r p-6 flex flex-col justify-between">
        <div>
          <div className='relative w-36'>
            <img className='w-36 rounded' src={userData.image} alt="" />
            {isEdit && (
              <label className='absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded cursor-pointer'>
                Change
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            )}
          </div>

          {isEdit ? (
            <input
              className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
              type='text'
              value={userData.name}
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
            />
          ) : (
            <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
          )}

          <hr className='bg-zinc-400 h-[1px] border-none my-4' />
          <div>
            <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
              <p className='font-medium'>Email id:</p>
              <p className='text-blue-400'>{userData.email}</p>
              <p className='font-medium'>Phone:</p>
              {isEdit ? (
                <input
                  className='bg-gray-100 max-w-52'
                  type='text'
                  value={userData.phone}
                  onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                />
              ) : (
                <p className='text-blue-400'>{userData.phone}</p>
              )}
              <p className='font-medium'>Address:</p>
              {isEdit ? (
                <p>
                  <input
                    className='bg-gray-50 mb-1'
                    type="text"
                    value={userData.address.line1}
                    onChange={e => setUserData(prev => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value }
                    }))}
                  />
                  <br />
                  <input
                    className='bg-gray-50'
                    type="text"
                    value={userData.address.line2}
                    onChange={e => setUserData(prev => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value }
                    }))}
                  />
                </p>
              ) : (
                <p className='text-gray-500'>
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>

          <div>
            <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
              <p className='font-medium'>Gender:</p>
              {isEdit ? (
                <select
                  className='max-w-20 bg-gray-100'
                  value={userData.gender}
                  onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className='text-gray-400'>{userData.gender}</p>
              )}
              <p className='font-medium'>Birthday:</p>
              {isEdit ? (
                <input
                  className='max-w-28 bg-gray-100'
                  type="date"
                  value={userData.dob}
                  onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                />
              ) : (
                <p className='text-gray-400'>{userData.dob}</p>
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

          {/* Bio */}
          <div className="mb-6 mt-10">
            <h3 className="font-medium mb-1">Bio</h3>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              rows="3"
              placeholder="Tell us about yourself..."
            ></textarea>
          </div>

          {/* Skills & Certificates */}
          <div className="mb-6">
            <h3 className="font-medium mb-1">Skills</h3>
            <p className="text-sm text-gray-600">Complete roadmaps to earn skills</p>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-1">Certificates</h3>
            <p className="text-sm text-gray-600">No certificates yet</p>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="space-y-2">
          <button
            className={`w-full py-2 text-white rounded-md font-semibold ${
              activeView === 'learn' ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            onClick={() => setActiveView('learn')}
          >
            Learn
          </button>
          <button
            className={`w-full py-2 border rounded-md flex items-center justify-center gap-2 ${
              activeView === 'jobs'
                ? 'bg-gray-200 border-blue-500'
                : 'border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => setActiveView('jobs')}
          >
            Search for Jobs
          </button>
          <button
            className="w-full py-2 border rounded-md flex items-center justify-center gap-2 border-red-400 hover:bg-red-100 text-red-600"
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
            <h1 className="text-3xl font-bold mb-2">Learning Roadmaps</h1>
            <p className="text-gray-600 mb-6">Choose a skill path and track your progress</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {roadmaps.map((roadmap, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-1">{roadmap.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{roadmap.description}</p>
                  <ul className="text-sm text-gray-700 list-disc ml-5 mb-4">
                    {roadmap.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                  <button
                    className={`text-white px-4 py-2 rounded-md text-sm font-semibold ${colorMap[roadmap.color]}`}
                  >
                    Start Learning
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-2">Available Jobs</h1>
            <p className="text-gray-600 mb-6">Browse and apply for current openings</p>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-lg shadow flex flex-col md:flex-row justify-between"
                >
                  <div>
                    <h2 className="text-lg font-semibold">{job.title}</h2>
                    <p className="text-sm text-gray-600">{job.company} — {job.location}</p>
                  </div>
                  <span className="text-sm text-blue-600 mt-2 md:mt-0">{job.type}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
