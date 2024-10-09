const express=require("express")
const dotEnv=require("dotenv")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const userRoutes=require("./routes/userRoutes")



const app=express()

const PORT =process.env.PORT || 4000

dotEnv.config()
app.use(bodyParser.json())

mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("MongoDB connected successfully")
})
.catch((error)=>{
    console.log(`${error}`)
})

app.use("/users",userRoutes)

app.listen(PORT,()=>{
    console.log(`server started and running at ${PORT}`)
})