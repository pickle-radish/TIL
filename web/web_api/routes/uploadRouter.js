const express=require('express');
const router=express.Router();
const formidable = require('formidable');
const fs=require('fs');
// const path=require('path');

fs.readdir('uploads', (error)=>{
    if(error){
        console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다');
        fs.mkdirSync('uploads');
    }
})



router.post('/img', (req,res)=>{
    var form = new formidable.IncomingForm();
    form.uploadDir = "d:/";
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        console.log(oldpath);
        var newpath = 'uploads/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });
});


module.exports=router;