const Candidate = require("../model/candidate");
var jwt = require('jsonwebtoken');
module.exports.middleware1=async(req,res,next)=>{
    if(req.cookies.user){
        const User=await Candidate.findOne({email:req.cookies.user});
        if(User){
            req.user=User;
           
           next();
        }
        else{
          return res.status(401).json({
                message:"unauthorized user"
            })
        }
    }
    else{
        return res.status(401).json({
            message:"unauthorized user"
        })
    }      
}
module.exports.middleware2=async(req,res,next)=>{
    if(req.cookies.user){
        const user=jwt.verify(req.cookies.user,'shhhhh');
        const User=await Candidate.findOne({email:user});
        if(User){
            req.user=User;
           
           next();
        }
        else{
          return res.status(401).json({
                message:"unauthorized user"
            })
        }
    }
    else{
        return res.status(401).json({
            message:"unauthorized user"
        })
    }      
}