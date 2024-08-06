import React from 'react';
import './settingsprofile.css';  // Update the path according to the new location
import Menubar from "../components/menubar.jsx";
import { Link } from 'react-router-dom';


const Settings = () => {
  return (
    <div>
<Menubar></Menubar>
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="tabs">
        <span className="active-tab">Privacy</span>
        <span>Account</span>
        <span>Help</span>
      </div>
      <div className="settings-section">
        <div className="setting-item">
          <div className="setting-label">
            <i className="icon-lock"></i>
            <span>Private profile</span>
          </div>
          <div className="toggle-switch">
            <input type="checkbox" id="private-profile" />
            <label htmlFor="private-profile"></label>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            <i className="icon-mention"></i>
            <span>Mentions</span>
          </div>
          <div className="select-wrapper">
            <select name="mentions">
              <option value="everyone">Everyone</option>
              <option value="following">People you follow</option>
              <option value="no_one">No one</option>
            </select>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            <i className="icon-hidden-words"></i>
            <span>Hidden Words</span>
          </div>
        </div>
      </div>
      
        <div className="setting-item">
          <div className="setting-label">
            <i className="icon-block"></i>
            <Link exact to="/delete" style={{textDecoration:"none", color:'black'}}><span>Delete profile</span></Link>
            <i className="icon-hide"></i>
          </div>
          <i className="icon-external-link"></i>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            </div>
            
        </div>
      
    </div></div>
  );
};

export default Settings;