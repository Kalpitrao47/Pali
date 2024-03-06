import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Regex for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Regex for password validation (at least 8 characters, 1 uppercase, 1 lowercase, 1 number)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email.');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters, with at least one uppercase letter, one lowercase letter, and one number.');
      return;
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <Link to="/table"><button type="button" onClick={handleLogin}>Login</button></Link>
      </form>
    </div>
  );
};

export default LoginPage;