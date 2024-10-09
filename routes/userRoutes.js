const express=require("express")
const router=express.Router()
const userController = require("../controllers/userController")
const User=require("../models/User")

router.post("/register",userController.createUser)

module.exports=router