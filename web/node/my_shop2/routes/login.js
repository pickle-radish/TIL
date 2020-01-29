const con=require('./dbcon');
const express=require('express');
const router=express.Router();


router.post('/', (req,res,next)=>{
    con.connect((err)=>{

        if (err) throw err;
        console.log("Connected!"); 
        const email=req.body.email;

        var sql = `select * from members where email = '${email}'`;
        
        con.query(sql, (err, result)=>{
            if (err){
                console.log("insert fail", err);    
                res.json({message: "로그인 실패"});
            }else{
                if(result[0]){
                    console.log("login success");
                    const name=result[0].name;
                    req.session.email=email;
                    req.session.name=name;
                    res.json({message: `${name}님 로그인 되었습니다`});
                }else{
                    console.log("no have email");
                    res.json({message: "없는 이메일입니다"});
                }
            }
        });
    });
});

module.exports=router;