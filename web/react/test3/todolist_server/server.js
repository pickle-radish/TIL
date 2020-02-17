const itemRouter=require('./routes/item');
const express=require('express');
const app=express();
const cors=require('cors');


app.use(express.json());
express.urlencoded({extended:true});
app.use(cors());

app.use('/item', itemRouter);

app.get('/', (req,res)=>{
    console.log("server running");
    res.json({message:"ok"});
});

app.listen(8080, ()=>{
    console.log("8080 server listen...");
});