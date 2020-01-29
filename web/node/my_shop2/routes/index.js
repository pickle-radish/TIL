const express=require('express');
const router=express.Router();


router.get('/', (req,res,next)=>{
    let logined;
    if(req.session.email){
        logined=true;
    }
    res.render('index',{flag:logined, name:req.session.name});    
});

module.exports=router;