import React, { useContext, useState } from "react";
import './Profilepage.css';
import Pic from "../components/pics/panda.jpg";
import Menubar from "../components/menubar.jsx";
import { UserContext } from "../components/UserContext.js";
import axios from 'axios';

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const res = await axios.put(`/user/update/${user}`, { username: newUsername });

      if (res.status === 200) {
        setUser(newUsername);
        setIsEditing(false);
        alert("username updated")
      } else {
        alert("Error updating username");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the username");
    }
  };

  const handleChange = (e) => {
    setNewUsername(e.target.value);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={Pic} alt="Profile" />
        </div>
        <div className="profile-details">
          {isEditing ? (
            <input
              type="text"
              value={newUsername}
              onChange={handleChange}
              className="username-input"
            />
          ) : (
            <h1>{user}</h1>
          )}
          <p>20 followers</p>
          <h2>I'm vengeance</h2>
        </div>
        <div className="edit-profile">
          {isEditing ? (
            <button onClick={handleSaveClick}>Save</button>
          ) : (
            <button onClick={handleEditClick}>Edit profile</button>
          )}
        </div>
      </div>
      <div className="profile-tabs">
        <div className="tab active">Posts</div>
        <div className="tabs-p"></div>
        <p>Make your first posts here!</p>
      </div>
      <Menubar />
    </div>
  );
}

export default Profile;
