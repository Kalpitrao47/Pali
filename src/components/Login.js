import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      return null; 
    } else {
      alert('Please fill in both email and password fields.');
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
