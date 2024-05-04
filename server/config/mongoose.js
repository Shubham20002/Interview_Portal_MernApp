const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/Interview_Portal_Mern');

const db=mongoose.connection;

db.on('open',()=>{
    console.log("connected to db");
}
);

module.exports=db;