const con=require('./dbcon');
const express=require('express');
const router=express.Router();

router.post('/content', (req,res,next)=>{
    const sql=`select * from board as b join members as m on b.m_no=m.no where bo_no=${req.body.bo_no}`;

    con.query(sql, (err, result)=>{
        if(err){
            res.json({message:"내용을 가져오는데 실패했습니다"});
        }else{
            const hit=result[0].hit+1;
            con.query(`update board set hit=${hit} where bo_no=${req.body.bo_no}`,(err)=>{
                if(err){
                    res.json({message:"조회수 에러"});
                }else{
                    console.log(hit);
                    res.json({result});
                }
            })
        }
    });
});

router.get('/view', (req,res,next)=>{
    const sql=`select b.bo_no, m.name, b.title, b.hit from board as b join members as m on b.m_no = m.no`;
    let page=1;
    if(req.body.page){
        page=req.body.page;
    }
    con.query(sql, (err, result)=>{
        if(err){
            res.render('board_view', {title:"게시판", err});
        }else{
            res.render('board_view', {title:"게시판", result, page});
        }
    });
    
});

router.post('/write', (req,res,next)=>{

    if(req.session.email){  
        
        const sql=`insert into board (m_no, title, content) values (${req.session.m_no}, '${req.body.board_title}', '${req.body.board_content}')`;

        con.query(sql, (err)=>{
            if(err){
                console.log(err);
                res.json({message:"글 등록 실패"});
            }else{
                console.log("borad insert ok");
                res.json({message:"글 등록 성공"});
            }
        });
    }else{
        res.json({message:"로그인부터 하세요"});
    }
});

router.get('/write_form', (req,res,next)=>{
    res.render('board_write_form', {title:"글쓰기 화면"});
});

module.exports=router;