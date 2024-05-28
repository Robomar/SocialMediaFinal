import UserModel from "../Models/userModel.js";


export const registerUser= async(req, res)=>{
    const {username, email, password}= req.body;

    const newUser= new UserModel({username,email,password})

    try{
        await newUser.save()
        res.status(200).json(newUser)

    }
    catch{
        res.status(500).json({message: error.message})

    }
}

//login user
export const loginUser= async(req,res)=>{
    const {username, password}= req.body

    try {
        const user = await UserModel.findOne({username: username})

        if(user)
            {
                const validity= await UserModel.findOne({password: password})

                validity?res.status(200).json(user): res.status(400).json("wrong password")
            }
            else{
                res.status(404).json("user doesnot exist")
            }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}