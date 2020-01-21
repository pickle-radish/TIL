setInterval(()=>{
    console.log('start');

    try{
        throw new Error('서버를 고장내주마');
        console.log('끝');
    } catch(err) {
        console.log(err);
    }

}, 1000);