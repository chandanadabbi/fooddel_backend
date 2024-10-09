const mongoose=require("mongoose")

const userShema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        default:false
    }
})

module.exports = mongoose.model("User" , userShema)