// LoginRegistration.jsx
import React, { useState, useContext } from 'react';
import './LoginRegistration.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../components/UserContext.js';

const LoginRegistration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", { username, password });

      if (res.status === 200) {
        alert("Login Successful");
        setUser(username); // Set the username in context
        navigate('/home');
      } else if (res.status === 400) {
        alert("Wrong password");
      } else {
        alert("User does not exist");
      }
    } catch (e) {
      console.log(e);
      alert("Wrong details");
    }
  }

  return (
    <div className='wrapper'>
      <div className="form-box">
        <form onSubmit={submit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder='Username'
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className='icons' />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder='Password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className='icons' />
          </div>
          <div className="remember-forget">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forget Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegistration;
/*import React, { useState } from 'react';
import './LoginRegistration.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginRegistration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", { username, password });

      if (res.status === 200) {
        alert("Login Successful")
        navigate('/home');
      } 
      else if(res.status === 400){
        alert("Wrong password");
      }
      else{
        alert("user does not exist")
      }
    } catch (e) {
      console.log(e);
      alert("Wrong details");
    }
  }

  return (
    <div className='wrapper'>
      <div className="form-box">
        <form onSubmit={submit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder='Username'
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className='icons' />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder='Password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className='icons' />
          </div>
          <div className="remember-forget">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forget Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegistration;
*/