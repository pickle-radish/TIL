const express=require('express');
const router=express.Router();
const User=require('../models').User;

router.post('/follow', async (req,res)=>{
    try{
        
        const user = await User.findOne({where:{nick:req.body.user}})
        const following = await User.findOne({where:{nick:req.body.following}})
       console.log(user);
        await user.addFollowing(following.id);
        
        res.json({message:"success"});
        // await user.addFollowing(parseInt(following))
    }catch(err){
        console.log(err);
        res.json({message:false});
    }
})

router.post('/insert', async (req,res)=>{
    const nick=req.body.name;
    const email=req.body.email;
    const password=req.body.pw;
    try{
        const result = await User.create({
            email,
            nick,
            password
        });
        console.log(result);
        res.json({message:nick});
    } catch(err){
        console.log(err);
        res.json({message:false});
    }

});

// router.post('/insert', (req,res)=>{
//     const name=req.body.name;
//     const email=req.body.email;
//     const pw=req.body.pw;
//     const comments=req.body.comments;
//     const sql=`insert into members (name, email, password, comments) values (?,?,?,?)`;
//     con.query(sql, [name, email, pw, comments], function(err){
//         if(err){
//             console.log(err);
//             res.json({message:"fail"});
//         } else {
//             res.json({message:name});
//         }
//     });
// })

router.get('/logout', (req,res)=>{
    console.log(req.sessionID);
    req.session.destroy(()=>{
        res.json({message:true});
    });
    
})


router.post('/login', async (req,res)=>{
    let email = req.body.email;
    let password = req.body.pw;

    try{
        const result = await User.findOne({where:{email,password}});
        res.json({nick:result.nick, id: result.id});
    }catch(err){
        console.log(err);
        res.json({message:false});
    }

    // const sql=`select * from members where email = ? and password = ?;`;
    // con.query(sql, [email, pw], function (err, result) {
    //     if (err){
    //         console.log(err);
    //         res.json({message:false});
    //     }else{
    //         if(result[0]){
    //             req.session.name=result[0].name;
    //             console.log(req.sessionID);
    //             res.json({message:result[0].name});
    //         }else{
    //             res.json({message:"login fail"});
    //         }
    //     }
    // });
})

module.exports=router;