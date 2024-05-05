const express=require('express');
const router=express.Router();
const Candidate=require('../../model/candidate')
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

  router.put('/update/:id',async(req,res)=>{
     const user=await Candidate.findByIdAndUpdate(req.params.id,req.body,{new:true});
     res.status(200).json({
        message:"user updated successfully",
        data:user
     })
  })

  module.exports=router;
