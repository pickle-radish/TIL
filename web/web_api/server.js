const express=require('express');
const app=express();
const path=require('path');

app.use(express.static(path.join(__dirname, 'public')));



app.use('/upload', require('./routes/uploadRouter'));




server = app.listen('8080',()=>{
    console.log('8080 server ready');
});

const a=require('./socket');
a(server);

const b=require('./sse');
b(server);

