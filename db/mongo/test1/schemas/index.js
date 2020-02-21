const mongoose=require('mongoose');

module.exports=()=>{
    const connect=()=>{
        if(process.env.NODE_ENV !== `production`){
            mongoose.set('debug',true); 
        }
        mongoose.connect('mongodb://localhost:27017/nodejs' , {dename:'nodejs'}, (err)=>{
            if(err){
                console.log("connection error", err);
            }else{
                console.log('connectino ok');

            }
        });

    };
    connect();

    mongoose.connection.on('error', (err)=>{
        console.log("mongodb connection error ", err);
    });
    mongoose.connection.on('disconnected', ()=>{
        console.log("connect try again");
        connect();
    });

    require('./user');
    require('./comment');
};