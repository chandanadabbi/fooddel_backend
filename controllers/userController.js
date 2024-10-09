const User=require("../models/User")

const createUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body

        const user=new User({
            name,
            email,
            password
        })
        await user.save()
        res.status(201).json(user)
    } catch(error){
        console.log(" there is an error",error)
        res.status(500).json({message:"server error"})
    }
}

module.exports = {createUser}