const express=require('express');
const router=express.Router();
const Candidate=require('../../model/candidate');
const middleware=require('../../config/middleware');

router.post('/signUp',async(req,res)=>{
    try{
      const student=await Candidate.findOne({email:req.body.email});
      if(!student){
        const data=await Candidate.create(req.body);
        res.status(200).json({
          message:"student added successfully",
          data:data
        })
      }
      else{
        res.status(200).json({
          message:"student already added",
        })
      }
    }
    catch(error){
      res.status(404).json({
        message:"error while adding student",
        
      })
    }
   
  });
router.get('/allstudent',async(req,res)=>{
    try{
        const student=await Candidate.find({});
        res.status(200).json({
            message:"all user fetch successfully",
            data:student
        })
    }
    catch(error){
        res.status(500).json({
            message:"inyernal server error"
        })
    }
    
})
  router.put('/update/:id',middleware.middleware2,async(req,res)=>{

    if(req.user.id!==req.params.id){
        console.log("error gettin here");
        return res.status(401).json({
            
            message:"unauthorized error"
        })
     }
     else{
        const user=await Candidate.findByIdAndUpdate(req.params.id,req.body,{new:true});
     
    return res.status(200).json({
        message:"user updated successfully",
        data:user
     })
     }
     
  })

  module.exports=router;
