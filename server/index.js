const express=require('express');
const port=8000;

const db=require('../server/config/mongoose');

const app=express();

app.listen(port,(error)=>{
  if(error){
    console.log('error while server starting');
  }
  else{
    console.log("server start on port no:",port);
  }
});

app.get('/',(req,res)=>{
    res.send("hello from express server");
})