const con=require('./dbcon');
const express=require('express');
const router=express.Router();



router.post('/', (req,res,next)=>{
    
    // con.connect((err)=>{
    //     if (err) throw err;
        console.log("Connected!");

        if(req.session.email){
            var sql = `INSERT INTO basket (m_no, product, quantity) VALUES (${req.session.m_no}, '${req.body.product}', ${req.body.quantity})`;
        
            con.query(sql, (err)=>{
                if (err){
                    console.log("basket insert fail", err);
                    res.json({message: "장바구니 처리 실패"});
                }else{
                    console.log("1 record inserted");
                    res.json({message: `${req.session.name}님의 장바구니에 담겼습니다`});
                }
            }); //end query
        }else{
            console.log('basket fail');
            res.json({message: "로그인부터 하세요"});
        }
        
    // });1 //end connect

});  //end post

module.exports=router;