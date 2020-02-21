const express=require('express');
const router=express.Router();
const mongo =require('mongodb');

const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/nodejs";
let dbo;
    
MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log(err);
    }else{
        dbo = db.db("nodejs");
    } 
});


router.post('/delete', (req,res)=>{
    console.log(req.body);
    const myquery = { _id: mongo.ObjectId(req.body._id)};
    dbo.collection("member").deleteOne(myquery, function(err, result) {
      if (err){
          console.log(err);
          res.json({message:false});
      }else{
          console.log("1 document deleted");
          res.json({message:true});
      }
    });
})

router.post('/update', (req,res)=>{
    const myquery = { _id: mongo.ObjectId(req.body._id)};
    const newvalues = { $set: {name: req.body.name, age: req.body.age, married:req.body.married } };
    dbo.collection("member").updateOne(myquery, newvalues, function(err, result) {
        if (err){
            console.log(err)
            res.json({message:false});
        }else{
            console.log("1 document updated");
            res.json({message:true});
        }
    });
})


router.post('/add', (req,res)=>{
    dbo.collection("member").insertOne(req.body, function(err, result) {
        if (err){
            console.log(err);
            res.json({message:false});
        }else{
            res.json({message:true}); 
        }
      });
})

router.post('/getAllMember' ,(req,res)=>{
    
    dbo.collection("member").find({}).toArray(function(err, result) {
        if (err){
            console.log(err);
            es.json({message:"연결은 성공"});
        }else{
            res.json({message:result});
        }
    });  
});





module.exports=router;