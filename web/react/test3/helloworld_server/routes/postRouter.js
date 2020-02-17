const express=require('express');
const router=express.Router();
const Post=require('../models').Post;
const User=require('../models').User;
const Hashtag=require('../models').Hashtag;


router.post('/getAllPosts', async (req,res)=>{
    try{
        
        const posts = await Post.findAll({
            include:{
                model:User,
                attributes:['id', 'nick']
            },
            order:[['createdAt','desc']]
        });
        res.json({posts});

    }catch(err){
        console.log(err);
        res.json({posts});
    }
});

router.post('/upload', async (req,res)=>{
    const userId=req.body.id;
    const content=req.body.content;
    const img=req.body.img;
    
    try{
        const post_result = await Post.create({
            userId,
            content,
            img
        });

        const tag= req.body.content.match(/#[^\s#]*/g);
        console.log(tag);

        if(tag){
            const hash_result = await Promise.all(
                tag.map((tag)=>{
                    return Hashtag.findOrCreate({where:{title:tag.slice(1).toLowerCase()}});
                })
            )

            post_result.addHashtags(hash_result.map((r)=>{
                return r[0]
            }));
        }
        
        res.json({message:true});
        
    } catch(err){
        console.log(err);
        res.json({posts});
    }

});


module.exports=router;