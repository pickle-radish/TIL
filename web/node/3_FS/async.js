const fs=require('fs');

console.log('start');

fs.readFile('./readme2.txt', (err, buffer)=>{
    if(err){
        throw err;
    }
    console.log('1번', buffer.toString());
});
fs.readFile('./readme2.txt', (err, buffer)=>{
    if(err){
        throw err;
    }
    console.log('2번', buffer.toString());
});
fs.readFile('./readme2.txt', (err, buffer)=>{
    if(err){
        throw err;
    }
    console.log('3번', buffer.toString());
});

console.log('end');