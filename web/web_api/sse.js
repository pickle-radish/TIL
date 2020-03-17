const SSE=require('sse');

let price = 100;

b=(server)=>{
    const sseObj=new SSE(server);
    sseObj.on('connection', (client)=>{

        setInterval(()=>{
            client.send('현재 입찰가:' + (price*=2));
        }, 5000);
    });


}


module.exports=b;