const express=require('express');
const app=express();
const path=require('path');
const session=require('express-session');


const loginRouter=require('./routes/login');
const logoutRouter=require('./routes/logout');
const {contactRouter}=require('./routes/contact');
const basketRouter=require('./routes/basket');


app.use(express.static(path.join(__dirname, 'public')));  //join은 앞에있는 것을 다 이어주고 resolve는 슬래시 기준으로 다 없애고 시작
//use는 어떤 설정을 사용하겠습니다 (어떤설정은 미들웨어)
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(session({
    resave:false,
    saveUninitialized:true,
    secret: '자고 싶다',
    cookie : {
        httpOnly:true,
        secure:false
    }
}));

app.use('/logout', logoutRouter);
// app.get('/logout', (req,res)=>{
//     req.session.destroy(()=>{
//         res.json({message:"logout ok"});
//     })
// });

app.use('/login', loginRouter);
// app.post('/login', (req,res)=>{
//     console.log(req.body);
//     // const login=async()=>{
//     //     await members.forEach(async (value, index)=>{
//     //         if(value.email==req.body.email){
//     //             await res.json({message:'login ok'});
//     //         }
//     //     });
//     //     res.json({message:"login fail"}); 
//     // }
//     // login();

//     let message;
//     for(let i=0; i<members.length; i++){
//         if(members[i].email==req.body.email){
//             message="login ok";
//             const my_basket=[];
//             req.session.basket=my_basket;
//             req.session.email=req.body.email;
//             break;
//         }
//     }
    
//     if(!message){    
//         message="login fail";
//     }

//     res.json({message});


// });

app.use('/contact', contactRouter);
// app.post('/contact', (req, res)=>{
//     members.push(req.body);

//     console.log(members);
    
//     res.json({message:"contact ok"});

// });

app.use('/basket', basketRouter);
// app.post('/basket', (req,res)=>{

//     const product=req.body.product;
//     if(req.session.email){
//         const my_basket=req.session.basket;
//         my_basket.push(product);

//         res.json({resultCode:1, message:`${product}을 장바구니에 담았습니다`, list:`${req.session.basket}`});
//     }else{
//         res.json({resltCode:0, message:"로그인 하세요"})
//     }
// });

app.listen(3000, ()=>{
    console.log("server ready...");
});