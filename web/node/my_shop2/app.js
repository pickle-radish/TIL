const boardRouter=require('./routes/board');
const basketRouter=require('./routes/basket');
const indexRouter=require('./routes/index');
const logoutRouter=require('./routes/logout');
const loginRouter=require('./routes/login');
const contactRouter=require('./routes/contact');
const express=require('express');
const session=require('express-session');
const path=require('path');
const app=express();


app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:"꿀잠",
    cookie:{
        httpOnly:true,
        secure:false
    }
}));

app.use('/board', boardRouter);
app.use('/basket', basketRouter);
app.use('/logout', logoutRouter);
app.use('/login', loginRouter);
app.use('/contact', contactRouter);

app.use('/', indexRouter);

app.listen(3001,()=>{
    console.log('server ready...');
});