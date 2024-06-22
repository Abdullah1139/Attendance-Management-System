import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    navigate('/dashboard');
  };

  const handleStudentLogin = () => {
    navigate('/login');
  };

  return (
    <div className="login-box">
        <div className='login-header'>
            <header>Admin Login</header>
        </div>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
        <input
          className='input-field'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div className='input-box'>
        <input
          className='input-field'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className='input-submit'>
            <button type="submit" className='submit-btn'>Login</button>
        </div>
      </form>
      <button className="student-login-button" onClick={handleStudentLogin}>
        Student Login
      </button>
    </div>
  );
};

export default AdminLogin;
