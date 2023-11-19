const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UserModel = require("./user");


const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/user")






app.post("/", async(req,res)=>{
  const {email, password} = req.body

  try{
       const check = await UserModel.findOne({email: email})
       if(check){
           if(check.password === password){
               res.json("exist");
           }
           else{
               res.json("notexist");
           }
       }
       else{
           res.json("Invalid email")
       }
  }
  catch(e){
      res.json("wrong detail")
  }
})


app.post("/signup", async(req,res)=>{
  UserModel.create(req.body).then(users =>res.json(users))
  .catch(err=> res.json(err))

//   const {name, email, password} = req.body
//   const data = {
//     name: name,
//     email: email,
//     password: password
//   }
//   try{
//     const check = await userModel.findOne({email: email})
//     if(check){
//         res.json("exist")
//     }
//     else{
//         res.json("notexist")
//         await userModel.insertMany([data])
//     }
// }
// catch(e){
//    res.json("notexist")
// }
})

app.listen(3000,()=>{
    console.log("Server is running");
})

