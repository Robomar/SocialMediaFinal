import React, { useState, useEffect } from 'react';
import './menubar.css';
import Hpic from './pics/home.png';
import Profpic from './pics/user.png';
import Notipic from './pics/bell.png';
import Postpic from './pics/more.png';
import Settpic from './pics/settings.png';
import Logout from './pics/logout.png';
import Logo from './pics/logo.png';
import Notifications from './notifications';
import Home from '../pages/home';
import { Link, useNavigate } from 'react-router-dom';

function Menubar() {
  const [showNotifications, setshowNotifications] = useState(false);
  const [showPostForm, setShowPostForm] = useState(false);
  const [postData, setPostData] = useState({ caption: '', imageUrl: '' });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleNotificationClick = () => {
    setshowNotifications(!showNotifications);
    setShowPostForm(false);
  };

  const handlePostClick = () => {
    setShowPostForm(!showPostForm);
    setshowNotifications(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Posting data:', postData);
    setPostData({ caption: '', imageUrl: '' });
    setShowPostForm(false);
  };

  const handleLogoutClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 2000); // Simulating a 2-second loading time
  };

  return (
    <div className='menu'>
      <img className="sociable" src={Logo} alt=""></img>
      <h2>Sociable</h2>
      <div>
        <Link className='rem' exact to={'/home'} style={{ textDecoration: "none", color: 'black' }}>
          <div className="homebar">
            <img src={Hpic} alt=""></img>
            <h3>Home</h3>
          </div>
        </Link>

        <Link className='rem' exact to={'/profilepage'}>
          <div className='hprofile'>
            <img src={Profpic} alt=""></img>
            <h3>Profile</h3>
          </div>
        </Link>

        <div className='hpost' onClick={handlePostClick}>
          <img src={Postpic} alt=""></img>
          <h3>Post</h3>
        </div>
        {showPostForm && (
          <form onSubmit={handleSubmit} className="post-form">
            <textarea
              name="caption"
              value={postData.caption}
              onChange={handleInputChange}
              placeholder="Write a caption..."
            />
            <input
              type="text"
              name="imageUrl"
              value={postData.imageUrl}
              onChange={handleInputChange}
              placeholder="Enter image URL..."
            />
            <button type="submit">Post</button>
          </form>
        )}

        <div className='hnotifi' onClick={handleNotificationClick}>
          <img src={Notipic} alt=""></img>
          <h3>Notifications</h3>
        </div>
        {showNotifications && <Notifications />}

        <Link className='rem' exact to={'/settings'}>
          <div className='hsettings'>
            <img src={Settpic} alt=""></img>
            <h3>Settings</h3>
          </div>
        </Link>

        <div onClick={handleLogoutClick} className="logout" style={{ cursor: 'pointer' }}>
          <img src={Logout} alt=""></img>
          <h3>Logout</h3>
        </div>
      </div>

      {loading && (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Menubar;
