const express=require('express');
const router=express('Router');
const member=require('../models').member;


router.post('/selectAll',(req,res)=>{
    member.findAll({})
    .then((members)=>{
        res.json({message:members});
    })
    .catch((err)=>{
        console.log(err);
        res.json({message:"db select error"});
    });
});

module.exports=router;