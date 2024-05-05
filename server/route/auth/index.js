const express=require('express');
const router=express.Router();
const Candidate=require('../../model/candidate');

router.post('/signIn',async(req,res)=>{
    try{
        const user=await Candidate.findOne({email:req.body.email});
        if(user){
            if(user.password===req.body.password){
                res.cookie('user',user.email);
                res.status(200).json({
                    message:"user login successfully"
                })
            }
            else{
                res.status(500).json({
                    message:"usename or password is wrong"
                })
            }
            
        }
        else{
            res.status(500).json({
                message:"user not presnet in db"
            })
        }
    }
    catch(error){
        res.status(500).json({
            message:"error while signin"
        })
    }
});

module.exports=router;