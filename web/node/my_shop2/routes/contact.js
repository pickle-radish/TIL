const con=require('./dbcon');
const express=require('express');
const router=express.Router();



router.post('/', (req,res,next)=>{
    
    con.connect((err)=>{
        if (err) throw err;
        console.log("Connected!");
        const name=req.body.name;   
        const email=req.body.email;
        const comments=req.body.comments;
        var sql = `INSERT INTO members (name, email, comments) VALUES ('${name}', '${email}', '${comments}')`;
        
        con.query(sql, (err, result)=>{
            if (err){
                console.log("insert fail", err);
                res.json({message: "회원가입 실패"});
            }else{
                console.log("1 record inserted");
                res.json({message: "회원가입 되었습니다"});
            }
        });
    });

});

module.exports=router;