const express=require('express');
const port=8000;
const db=require('../server/config/mongoose');
var cookieParser = require('cookie-parser')


const app=express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.use('/',require('./route'));
app.listen(port,(error)=>{
  if(error){
    console.log('error while server starting');
  }
  else{
    console.log("server start on port no:",port);
  }
});

// app.post('/student',async(req,res)=>{
//   try{
//     const student=await Candidate.findOne({email:req.body.email});
//     if(!student){
//       const data=await Candidate.create(req.body);
//       res.status(200).json({
//         message:"student added successfully",
//         data:data
//       })
//     }
//     else{
//       res.status(200).json({
//         message:"student already added",
//       })
//     }
//   }
//   catch(error){
//     res.status(404).json({
//       message:"error while adding student",
      
//     })
//   }
 
// })