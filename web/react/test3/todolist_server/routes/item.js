const express=require('express');
const router=express.Router();
const con=require('./dbcon');

router.post('/add', (req,res)=>{
    console.log(req.body);

    res.json({message:"add ok"});
})

module.exports=router;