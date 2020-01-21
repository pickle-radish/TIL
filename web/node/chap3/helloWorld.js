function a(){
    return new Promise((resolve, result)=>{
        resolve('hello');
            setTimeout(()=>{
        }, 2000);
    });
}
function b(){
    return new Promise((resolve, result)=>{
        resolve('world');
            setTimeout(()=>{
        }, 1000);
    });
}

console.log('start');

setTimeout(function(){
    console.log('hello');
    setTimeout(function(){
        console.log('world');
        console.log('end');
    }, 1000);
    
}, 2000);

async function c() {
    console.log("start");
    const v1 = await a();
    console.log(v1);
    const v2 = await b();
    console.log(v2);
    console.log('end');
}

c();