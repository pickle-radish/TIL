const express=require("express");
const app=express();
const cors=require('cors');
const session=require('express-session');

const memberRouter=require('./routes/memberRouter');

const sequelize=require('./models').sequelize;
sequelize.sync();

const corsOptions = {
    origin: true, //동일 출처 정책을 사용하겠다. 원래는 3000번 포트만 통신 가능이지만 8080과도 통신 가능하게 하겠다
    credentials: true //신임장
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:"sleep",
    cookie:{
        httpOnly:true,
        secure:false
    }
}));


app.use('/member', memberRouter);
app.use('/post', require('./routes/postRouter'));

app.get('/', (req,res)=>{
    res.json({ip:"111.222.333.444"});
});

app.listen(8080, ()=>{
    console.log("8080 server ready...");
})