const WebSocket=require('ws');

a=(server)=>{
    const wss=new WebSocket.Server({server});
    wss.on('connection', (ws,req)=>{
        const ip=req.headers['x-forwarded-for'] || req.connection.remoteAddress
        console.log('새로운 클라이언트 접속' + ip);
        ws.on('message', (message)=>{
            wss.clients.forEach((client)=>{
                if(client.redayState===WebSocket.open){
                    client.send(message);
                }
            })
        });

        ws.on('close', ()=>{
            console.log('클라이언트 접속 해제' + ip);
        })

    });
}


module.exports=a;

