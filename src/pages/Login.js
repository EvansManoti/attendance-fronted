import React, { useState } from 'react';
import lock from '../assets/images/lock.svg';
import { Label } from 'flowbite-react';

function Login() {
  const [roles, setRoles] = useState({
    admin: false,
    user: false
  });

  const handleRoleChange = (role) => {
    setRoles(prevRoles => ({
      ...prevRoles,
      [role]: !prevRoles[role]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with selected roles
    console.log('Selected roles:', roles);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div>
          <h2 className="text-3xl font-semibold text-center md:text-left">
            <span className="md:block">Moringa </span>Attendance System
          </h2>
          <div className="min-w-[300px]">
            <img className="mx-auto" src={lock} alt="illustration" />
          </div>
        </div>
        <form className="flex w-full flex-col justify-center gap-4" onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold text-center">Login</h3>
          <div className="mb-2 block">
            <Label value="Select Role(s)" />
          </div>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={roles.admin}
                onChange={() => handleRoleChange('admin')}
                className="rounded-full"
              />
              Admin
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={roles.teacher}
                onChange={() => handleRoleChange('teacher')}
                className="rounded-full"
              />
              Teacher
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={roles.student}
                onChange={() => handleRoleChange('student')}
                className="rounded-full"
              />
              Student
            </label>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <input
              className="input"
              id="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <input className="input" id="password" type="password" required placeholder='*****************' />
          </div>
          <button className="py-3 px-6 bg-orange-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
