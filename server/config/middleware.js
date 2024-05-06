const Candidate = require("../model/candidate");

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