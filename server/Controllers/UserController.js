import UserModel from "../Models/userModel.js";


export const getUser =  async(req,res)=>{
const id = req.params.id;
 try {
    const user = await UserModel.findById(id)

    if(user){
       const {password, ...otherDetails}= user._doc
        res.status(200).json(otherDetails)
    }
    else{
        res.status(404).json("No such user exists")
    }
 } catch (error) {
    res.status(500).json(error)
 }


};

// update a user
export const updateUserByUsername = async (req, res) => {
    const { username } = req.params;
    const { newUsername } = req.body;
  
    try {
      const user = await UserModel.findOneAndUpdate(
        { username },
        { username: newUsername },
        { new: true }
      );
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json("User not found");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
  //delete user
export const deleteUser = async (req, res) => {
    const { username } = req.params;  // Use username instead of id

    try {
        // Find the user by username
        const user = await UserModel.findOne({ username });
        console.log("User found:", user);

        // If user does not exist, return 404
        if (!user) {
            return res.status(404).json("No such user exists");
        }

        // Delete the user
        await UserModel.findOneAndDelete({ username });
        res.status(200).json("User deleted successfully");
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json(error);
    }
};
 //follow a user
 export const followUser = async(req, res)=>{
    const id = req.params.id   //user to be followed

    const {currentUserId}= req.body //who wants to follow

    if (currentUserId===id){
        res.status(403).json("Action forbidden")
    }
    else{
        try {
            const followUser= await UserModel.findById(id)
            const followingUser= await UserModel.findById(currentUserId)

            if(!followUser.followers.includes(currentUserId)){            //if user id is already present in follow user
                         await followUser.updateOne({$push : {followers: currentUserId}})
                         await followingUser.updateOne({$push : {followings : id}})
                         res.status(200).json("User followed!")
            }
            else{
                res.status(403).json("User is already followed by you")
            }
            
        } catch (error) {
            
        }
    }
 }

 //unfollow a user
 export const UnFollowUser = async(req, res)=>{
    const id = req.params.id  

    const {currentUserId}= req.body 

    if (currentUserId===id){
        res.status(403).json("Action forbidden")
    }
    else{
        try {
            const followUser= await UserModel.findById(id)
            const followingUser= await UserModel.findById(currentUserId)

            if(followUser.followers.includes(currentUserId)){            //if user id is already present in follow user
                         await followUser.updateOne({$pull : {followers: currentUserId}})
                         await followingUser.updateOne({$pull : {followings : id}})
                         res.status(200).json("User Unfollowed!")
            }
            else{
                res.status(403).json("User is unfollowed by you")
            }
            
        } catch (error) {
            
        }
    }
 }
