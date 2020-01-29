const express=require('express');
const router=express.Router();
const {members}=require('./contact');


router.post('/', (req,res)=>{
    let message;
    let code;
    for(let i=0; i<members.length; i++){
        if(members[i].email==req.body.email){
            message="login ok";
            code=1;
            const my_basket=[];
            req.session.basket=my_basket;
            req.session.email=req.body.email;
            break;
        }
    }
    
    if(!message){    
        message="login fail";
        code=0;
    }

    res.json({message, code});


});

module.exports=router;