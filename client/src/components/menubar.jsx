


import React from 'react';
import './menubar.css';
import Hpic from './pics/home.png';
import Profpic from './pics/user.png';
import Notipic from './pics/bell.png';
import Postpic from './pics/more.png';
import Settpic from './pics/settings.png';
import Logout from './pics/logout.png';
import Logo from './pics/logo.png';
import { useState } from 'react';
import Notifications from './notifications';
import Home from '../pages/home';
import { Link } from 'react-router-dom';

function Menubar(){ 
  //this is usestate of notification div appearance
  const [showNotifications, setshowNotifications] = useState(false);

  const handleNotificationClick = () => {
    setshowNotifications(!showNotifications); // Toggle notification visibility
    setShowPostForm(false);
  };
  //this is usestate of post div appearance
  const [showPostForm, setShowPostForm] = useState(false);
  const [postData, setPostData] = useState({
    caption: '',
    imageUrl: '',
  });

  const handlePostClick = () => {
    setShowPostForm(!showPostForm); // Toggle form visibility
    setshowNotifications(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Simulate data submission (replace with actual API call)
    console.log('Posting data:', postData);

    // Clear form data after submission
    setPostData({ caption: '', imageUrl: '' });

    // Close the form after submission (optional)
    setShowPostForm(false);
  };
   
  
 


   
    return(

     <div className='menu'>
      <img className="sociable" src={Logo} alt=""></img><h2>Sociable</h2>
      <div>
      <Link classname='rem' exact to={'/home'} style={{textDecoration:"none", color:'black'}}><div className="homebar" ><img src={Hpic} alt=""></img><h3 >Home</h3></div></Link>

      <Link className='rem' exact to={'/profilepage'}><div className='hprofile'><img src={Profpic} alt=""></img><h3>Profile</h3> </div></Link>
      

      <div className='hpost' onClick={handlePostClick}><img src={Postpic} ></img><h3>Post</h3></div>
      {
      showPostForm && (
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
      )
      
}

      <div className='hnotifi' onClick={handleNotificationClick}><img src={Notipic} ></img> <h3>Notifications</h3></div>
      {showNotifications && (
        <Notifications/>
      )}

      <Link className='rem' exact to={'/settings'}><div className='hsettings' ><img src={Settpic}></img><h3>Settings</h3></div></Link>

      <Link exact to={'/'} style={{textDecoration:'none', color:'black'}}><div className="logout"><img src={Logout}></img><h3 >Logout</h3></div></Link>

      </div>
    

     </div>
     );
    
     }
     export default Menubar;