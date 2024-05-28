import mongoose from "mongoose";
import PostModel from "../Models/postModel.js";
import UserModel from "../Models/userModel.js";

//create new post
export const createPost = async(req,res)=>{
    const newPost = new PostModel(req.body)

    try{
        await newPost.save()
        res.status(200).json(newPost)

    }catch(error){
        res.status(500).json(error)
    }

}

//get post
export const getPost = async(req,res)=>{
    const id= req.params.id
    try {
        const post= await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

//update post
export const updatePost= async (req, res)=>{
    const postId=req.params.id 
    const {userId}= req.body        

    try {
        const post= await PostModel.findById(postId)
        if(post.userId===userId){            //assuring security update ones own post
              await post.updateOne({$set: req.body})
              res.status(200).json ("post updated")
        }
        else{
            res.status(403).json("Action forbidden")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

//delete a post
export const deletePost= async(req,res)=>{
    const id= req.params.id
    const {userId}= req.body
    try {
        const post= await PostModel.findById(id)
        if(post.userId=== userId){
            await post.deleteOne();
            res.status(200).json("Post deleted successfully")

        }
        else{
            res.status(403).json("Action forbidden")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}
//like and Unlike post
export const likePost= async(req,res)=>{
    const id= req.params.id
    const {userId}= req.body
    try {
        
        const post =  await PostModel.findById(id)
        if(!post.likes.includes(userId)){         //likes not included of current user id
         await post.updateOne({$push : {likes: userId}})
         res.status(200).json("Post Liked")
        }
        else{
            await post.updateOne({$pull : {likes: userId}})
         res.status(200).json("Post Unliked")

        }
    } catch (error) {
        res.status(500).json(error)
    }
}
//Get timeline pOsts
export const getTimelinePosts= async(req,res)=>{
const userId=req.params.id
try {
    const currentUserPosts = await PostModel.find({userId : userId}) //for person's own posts
    
    const followingPosts= await UserModel.aggregate([                 //complex qeory pipeline, array of steps
    {
        $match: {
            _id : new mongoose.Types.ObjectId(userId)                   //for changing userid in mongodb form
        }
    },
       {
        $lookup:{
            from: "posts",
            localField: "followings",             //field against which we want to integrate with other model
            foreignField: "userId",
            as: "followingPosts"
        }
    },
        {
            $project:{
                followingPosts: 1,
                _id: 0

         }
        }
     ])   
     res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts)  //...spreading the following posts, [0] first index , want result in an arranged proper manner    
     .sort((a,b)=>{                      //basic javascript sorting technique sort to latest post first
       return b.createdAt - a.createdAt;     //descending order last post show first
     })
    );       
    
} catch (error) {
    res.status(500).json(error)
}

}