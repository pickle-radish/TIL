const express=require('express');
const app=express();
const path=require('path');
const connect=require('./schemas');

connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// app.use('/member', require('./routes/memberRouter'));
app.use('/member', require('./routes/mongo_userRouter'));
app.use('/comments', require('./routes/comments'));


app.listen(3000, ()=>{
    console.log("3000 server ready...");
})


