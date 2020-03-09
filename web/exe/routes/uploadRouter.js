const express=require('express');
const router=express.Router();
const multer=require('multer');
const fs=require('fs');
const path=require('path');

fs.readdir('uploads', (error)=>{
    if(error){
        console.log('uploads 폴더 생성');
        fs.mkdirSync('uploads');
    } 
});

const upload = multer({
    storage:multer.diskStorage({
        destination(req, file, cb){
            cb(null, 'uploads/');
        },
        filename(req, file, cb){
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    limits: {fileSize:5*1024*1024}
})


router.post('/img', upload.single('file'), (req,res)=>{
    console.log(req.file);
    res.end('file upload ok');

});




module.exports = router;