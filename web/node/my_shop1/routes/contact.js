const express=require('express');
const contactRouter=express.Router();

const members=[
    {name:'nsm', email:'ghi@jkl.com', comments: 'a'},
    {name:'jes', email:'abc@def.com', comments: 'a'}
];

contactRouter.post('/', (req, res)=>{
    members.push(req.body);
    console.log(members);
    res.json({message:"contact ok"});

});

module.exports={contactRouter, members};