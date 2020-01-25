const express =require('express');
const path=require('path');
const session=require('express-session');

const app=express();

const user_data={id:"a", pw:"b"};

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:'미녀 강사 전은수',
    cookie: {
        httpOnly:true,
        secure:false
    }
}));

app.post('/login',(req,res)=>{
    console.log("login처리:"+req.headers.cookie);
    console.log(req.session);
    const id=req.body.id;
    const pw=req.body.pw;
    if( (id == user_data.id) && (pw == user_data.pw)){        
        req.session.logined_user_id=id;
        res.json({resultCode:1, message:`${id}님 로그인 되셨습니다.`});
    }else{
        res.json({resultCode:0, message:`다시 로그인하세요`});
    }    
});
app.post('/basket',(req,res)=>{
    console.log("basket처리:"+req.headers.cookie);
    console.log(req.session);
    
    const product=req.body.product;
    if( req.session.logined_user_id){//로그인 되어있는 사용자
        if(!req.session.basket){//장바구니가 없을 때
            req.session.basket=[];
        }
        req.session.basket.push(product);
        res.json({resultCode:1, message:`${req.session.logined_user_id}님의 장바구니에 ${product}가 담겼습니다.`});


    }else{
        res.json({resultCode:0, message:`로그인부터 하세요`});
    }    
});
app.post('/basketCar',(req,res)=>{
    console.log("basketCar처리:"+req.headers.cookie);
    console.log(req.session);
    
    const car=req.body.car;
    if( req.session.logined_user_id){//로그인 되어있는 사용
        if(!req.session.basketCar){
            req.session.basketCar=[];
        }
        console.log();
        //car.each(function(item, index){
        //     req.session.basketCar.push(item);
        // });
        
        // res.json({resultCode:1, message:`${req.session.logined_user_id}님의 장바구니에 ${car}가 담겼습니다.`});

        
    }else{
        res.json({resultCode:0, message:`로그인부터 하세요`});
    }    
});

app.post('/basket_view',(req,res)=>{
    console.log("basket_view 처리:"+req.headers.cookie);
    console.log(req.session);    
    
    if( req.session.logined_user_id){//로그인 되어있는 사용자
        let basket="";
        let car="";
        if(req.session.basket || req.session.basketCar){//장바구니가 있을 때
            if(req.session.basket){
                basket=req.session.basket.join(',');
            }else{
                basket="(없음)";
            }
            if(req.session.basketCar){
                car=req.session.basketCar;
            }else{
                car="(없음)";
            }
            const allbasket = basket+" / "+car;
            res.json({resultCode:1, message:allbasket});
            
        }else{
            res.json({resultCode:0, message:`장바구니가 비었습니다`});
        }    
        
    }else{
        res.json({resultCode:0, message:`로그인부터 하세요`});
    }    
});

app.post('/logout',(req,res)=>{
    console.log("logout 처리:"+req.headers.cookie);
    console.log(req.session);    
    
    req.session.destroy(()=>{
        console.log("세션이 파기 되었습니다");
        res.json({resultCode:1, message:`로그아웃 되었습니다`});
    });
});


app.listen(3000,()=>{
    console.log("server ready...");
});