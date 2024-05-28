import React from "react";
function Profile(props){
return(
    <div style={{margin:'5px' , display:"flex", flexDirection: "row"}}>
        <img className="pfp" style={{height:'30px', width:'30px', borderRadius:'50%', background: "gray", marginRight:'5px'}} src={props.pfp}></img>
        <p style={{marginTop:"5px"}}>{props.Name}</p>
    </div>


);
}
export default Profile;
