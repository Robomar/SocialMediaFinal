import React, { useState } from 'react';
import './LoginRegistration.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import axios from 'axios';
import { Link,useNavigate} from 'react-router-dom'; // Correct import for useNavigate


const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/register", { username,email, password });

      if (res.status === 200) {
        alert("Registration Successful")
        navigate('/');
      } else {
        alert("Wrong details");
      }
    } catch (e) {
      console.log(e);
      alert("Wrong details");
    }
  }
  
  return (
    <div className={'wrapper'}>
      <div className="form-box Register">
        <form method="POST" onSubmit={submit}>
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' name='username' required onChange={(e)=>{setUsername(e.target.value)}}  />
            <FaUser className='icons' />
          </div>
          <div className="input-box">
            <input type="text" placeholder='Email' name='email' required onChange={(e)=>{setEmail(e.target.value)}}  />
            <FaEnvelope className='icons' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' name='password' required onChange={(e)=>{setPassword(e.target.value)}}  />
            <FaLock className='icons' />
          </div>
          <div className="remember-forget">
            <label><input type="checkbox" /> I agree to the terms and Conditions</label>
            <a href="#"></a>
          </div>
          <button type="submit" >Register</button>
          <div className="register-link">
            <p>Already have an account? <Link to={'/'}>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
