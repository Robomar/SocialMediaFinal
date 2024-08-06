import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DeleteUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  async function handleDelete(e) {
    e.preventDefault();

    try {
      const res = await axios.delete(`/user/delete/${username}`);
      console.log("Delete response:", res);

      if (res.status === 200) {
        alert("User deleted successfully");
        navigate('/'); // Redirect to home or login page
      } else {
        alert("Failed to delete user");
      }
    } catch (e) {
      console.error("Error deleting user:", e);
      alert("Error deleting user");
    }
  }

  return (
    <div className="wrapper">
      <div className="form-box delete">
        <form method="POST" onSubmit={handleDelete}>
          <h1>Delete User</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" name="username" required onChange={(e) => setUsername(e.target.value)} />
          </div>
          <button type="submit" >Delete User</button>
        </form>
        <Link exact to={"/settings"} style={{color:"black"}}>Back</Link>
      </div>
    </div>
  );
};

export default DeleteUser;
