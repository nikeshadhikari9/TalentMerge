import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [role, setRole] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [orgName, setOrgName] = useState('');
  const [orgPlace, setOrgPlace] = useState('');
  const [orgType, setOrgType] = useState('');

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (role === 'Organization') {
      navigate('/pages/OrganizationDashboard');
    } else if (role === 'Job Seeker') {
      navigate('/pages/UserDashboard');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : "log in"} for upcoming events and notifications</p>

        {/* Role Selection FIRST */}
        <div className='w-full'>
          <p>You are:</p>
          <select className='border border-zinc-300 rounded w-full p-2 mt-1'
            onChange={(e) => setRole(e.target.value)} value={role} required>
            <option value="">Select your role</option>
            <option value="Job Seeker">Job Seeker</option>
            <option value="Organization">Organization</option>
          </select>
        </div>

        {/* Only show the rest when role is selected */}
        {role && (
          <>
            {state === 'Sign Up' && (
              <>
                {role === 'Job Seeker' && (
                  <div className='w-full'>
                    <p>Full Name</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text"
                      onChange={(e) => setFullName(e.target.value)} value={fullName} required />
                  </div>
                )}

                <div className='w-full'>
                  <p>{role === 'Organization' ? "Organization Username" : "Username"}</p>
                  <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text"
                    onChange={(e) => setUsername(e.target.value)} value={username} required />
                </div>

                {role === 'Organization' && (
                  <>
                    <div className='w-full'>
                      <p>Organization Name</p>
                      <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text"
                        onChange={(e) => setOrgName(e.target.value)} value={orgName} required />
                    </div>
                    <div className='w-full'>
                      <p>Organization Place</p>
                      <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text"
                        onChange={(e) => setOrgPlace(e.target.value)} value={orgPlace} required />
                    </div>
                    <div className='w-full'>
                      <p>Type of Organization</p>
                      <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text"
                        onChange={(e) => setOrgType(e.target.value)} value={orgType} required />
                    </div>
                  </>
                )}
              </>
            )}

            <div className='w-full'>
              <p>Email</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1'
                type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
            </div>

            <div className='w-full'>
              <p>Password</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1'
                type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
            </div>

            <button type='submit' className='bg-violet-700 text-white w-full py-2 rounded-md text-base'>
              {state === 'Sign Up' ? "Create Account" : "Login"}
            </button>
          </>
        )}

        {state === 'Sign Up' ? (
          <p>Already have an account? <span onClick={() => setState('Login')} className='text-violet-700 underline cursor-pointer'>Login here</span></p>
        ) : (
          <p>Create a new account? <span onClick={() => setState('Sign Up')} className='text-violet-700 underline cursor-pointer'>Click here</span></p>
        )}
      </div>
    </form>
  );
};

export default Login;
