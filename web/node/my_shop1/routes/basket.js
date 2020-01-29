const express=require('express');
const router=express.Router();

router.post('/', (req,res)=>{

    const product=req.body.product;
    if(req.session.email){
        const my_basket=req.session.basket;
        my_basket.push(product);

        res.json({resultCode:1, message:`${product}을 장바구니에 담았습니다`, list:`${req.session.basket}`});
    }else{
        res.json({resltCode:0, message:"로그인 하세요"})
    }
});


module.exports=router;