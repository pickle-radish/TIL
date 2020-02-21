const express=require('express');
const Comment = require('../schemas/comment');

const router=express.Router();


router.post('/delete', async (req,res)=>{
    try{
        const result = await Comment.remove({_id:req.body._id})
        res.json({result});
    }catch(err){
        console.log(err);
        res.json({message:false});
    }
});


router.post('/update', async (req,res)=>{
    try{
        const result = await Comment.update({_id:req.body._id}, {comment:req.body.newComment})
        
        res.json({message:result});
    }catch(err){
        console.log(err);
        res.json({message:false});
    }
});

router.post('/add', async (req,res)=>{
    try{
        console.log(req.body);
        const comment = new Comment(req.body);
        const comments = await comment.save();
        const result = await Comment.populate(comments, {path: "commenter"});
        res.json({result});
    }catch(err){
        console.log(err);
        res.json({message:false});
    }
});


router.post('/getAllComment', async (req,res)=>{
    try{
        const comments = await Comment.find({}).populate('commenter');
        res.json({comments});
    }catch(err){
        console.log(err);
        res.json({message:false});
    }
})







module.exports=router;