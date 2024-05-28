import React from "react";
import './home.css';
import Menubar from '../components/menubar.jsx';
import PostCollection from "../components/Post/PostCollection.jsx";

import Profile from "../components/profile.jsx";
import Prettyprincess from '../components/pics/prettyprincess.jpg';
import Panda from '../components/pics/panda.jpg';
import Catpic from '../components/pics/logo.png';


function Home(){

return(
    <div style={{flexDirection:"row"}}>
        
        <Menubar/>
        <PostCollection/>
        <div className="following">
        <h2>Suggestions</h2>
        <Profile pfp={Prettyprincess} Name="Pretty_Princess11"></Profile>
        <Profile pfp={Panda} Name="Panda_it_is"></Profile>
<Profile pfp={Catpic} Name="Mundane"></Profile>


    </div>
         
    
    
    </div>
);
}

export default Home;