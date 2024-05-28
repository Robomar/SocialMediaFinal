import React from "react";
import './postcard.css';
import ProfileImage from '../pics/prettyprincess.jpg'
import {FaImage} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import Scenary from '../pics/scenary.jpg';
import Panda from '../pics/panda.jpg';
import { useState,useRef } from "react";




function PostCard(){
  const [image,setImage]=useState(null);
  const imageRef=useRef();
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const [liked, setLiked] = useState(false);
      const [likeCount, setLikeCount] = useState(0);
  
  
  const onImageChange=(e)=>{
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
  }

  }

  const reset=()=>{
    setImage(null);
    description.current.value="";
  }
  
  const handlePost = () => {
    if (image) {
        setPosts([...posts, { image, description }]);
        setImage(null);
        setDescription("");
    }
};
const handleLike = () => {
  setLiked(!liked);
  setLikeCount(liked ? likeCount - 1 : likeCount + 1);
};   
  


    return (
      
        <div className="PostSide">
        <div className="Postbar">
          
          <input  type="text" placeholder="What's Happening" value={description}
                onChange={(e) => setDescription(e.target.value)}/>    

        <div className="postOptions">
             <div className="options" onClick={()=>imageRef.current.click()}>
             <FaImage style={{width:"30px", height:"30px", color:"rgb(250, 112, 154)", cursor:"pointer"}}/>
            </div>
            
    
            <button className="ps-button" onClick={handlePost}>Post</button>
            <div style={{display:"none"}}>
              <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}></input>
            </div>

          </div>
        
          </div>
          
          <div className="posts">

                   <div className="post">
                        <img src={Scenary} alt="" />
                        <button className="heartb" ><FaHeart className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}/><p className="number">{likeCount}</p> </button>
                        <p className="cap">Caption: The beauty of the mountains is undescribable</p>
                    </div>
                    <div className="post">
                        <img src={Panda} alt="" />
                        <button className="heartb" ><FaHeart className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}/><p className="number">{likeCount}</p> </button>
                        <p className="cap">Caption: This is beauty</p>
                    </div>
                    <div className="post">
                        <img src={ProfileImage} alt="" />
                        <button className="heartb" ><FaHeart className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}/><p className="number">{likeCount}</p> </button>
                        <p className="cap">Caption: This is beauty</p>
                    </div>

                {posts.map((post, index) => (
                    <div key={index} className="post">
                        <img src={post.image} alt={`post-${index}`} />
                        <button className="heartb" ><FaHeart className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}/><p className="number">{likeCount}</p> </button>
                        <p className="cap">Caption:{post.description}</p>
                    </div>
                ))}
            </div>
          
         </div>
        

    );
}
export default PostCard;
/*import React from "react";
import './postcard.css';
import { FaHeart } from "react-icons/fa";
//import Like from './pics/heart (2).png';
//import Catpic from './pics/Cute Cat _ Cute Kitty.jpg';
import { useState } from "react";

function Postcard(props){
    const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };   //if likes is not null then  decrement  else  increment
        
        
return(

    <div className="postcard">
        <div className="ppf"><img className="profile" src={props.profile}></img><p className="name">{props.name}</p></div>
         <div ><img className='posting'  src={props.img}></img></div>
         <div ><button ><FaHeart className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}/><p className="number">{likeCount}</p> </button></div>
        
         <p style={{fontSize:'15px', marginTop:"0px"}}>Caption: {props.caption}</p>
    </div>
    
    
);





}
export default Postcard;*/