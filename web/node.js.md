# node.js



노드 런타임

- 노드를 돌려주는 실행 환경 (lib, v8엔진, 브라우저 등)



동기적 비동기적

- 동기적 : 브라우저에서는 한 글자라도 기다리고 다른일을 못한다

- 비동기적 : 자신이 불러온 함수가 얼마나 걸리든 간에 다음 명령어를 실행한다



자바스크립트

- 싱글 스레드



자바 

- 싱글 스레드



서블릿 자체가 리퀘스트 하나당 스레드가 자동 생성된다. -> 멀티 스레드



#### 블록킹 논블록킹

- 블록킹 : 이전의 프로세스가 다 끝날 때 까지 다음 프로세스는 대기
- 논블록킹 : 이전의 포르세스가 다 끝나기 전에 시작(cpu의 스케쥴링)



#### 콜백함수

함수의 인자로 다른 함수가 들어가는 것



#### 모듈

특정한 기능을 하는 함수나 변수들의 집합 

사용자가 필요한 기능을 따로 코드로 만들 수 있다



#### 내장객체

- global
- console
- timer
  - setTimeout : 주어진 밀리초 이후에 실행
  - setInterval : 주어진 밀리초 마다 반복 실행
  - setImmediate : 즉시 실행
- __filename
- __dirname
- process



#### 노드 내장 모듈 

- os
- path
- url
- querystring



#### 파일 시스템

- readFile : 파일을 불러와서 읽는다
- writeFile : 파일에 글을 입력한다, 파일이 없는 경우 생성한다



노드에서 대부분의 메서드들은 비동기 방식으로 작동한다 

```js
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
```

위의 코드 실행 결과는 다음과 같다

```
시작
끝
2번
3번
1번
```

시작과 끝을 제외하고는 결과의 순서가 매번 달라질 수 있다

순서대로 시작하려면 다음과 같이 코드를 쓴다

```js
const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());
console.log('끝');
```

위의 코드 결과는 다음과 같다

```
시작
1번
2번
3번
끝
```



#### 버퍼 스트림

스트림

- 버퍼 중에서도 메모리 문제를 해결하기 위해서 버퍼의 크기를 작게 만들어 여러 번에 나눠서 보내는 방식이 등장

- 예를들어 1MB의 버퍼를 만든후 100MB 파일을 백 번에 걸쳐 보내는 것

```js
const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 8});
const data = [];                                          //highWaterMark:버퍼의 크기를 조정

readStream.on('data', (chunk)=>{
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
});

readStream.on('end', ()=>{
    console.log('end : ', Buffer.concat(data).toString());
});

readStream.on('error', (err)=> {
    console.log('error : ', err);
});

```



#### 예외처리

에러가 발생할 것 같은 부분을 try catch 문으로 감싸준다



## http 모듈로 웹 서버 만들기



#### 요청과 응답

```js
const http = require('http');

http.createServer((req, res) => {
	res.write('<h1>Hello Node!</h1>');
	res.end('<p>Hello Server!</p>');
}).listen(8080, () => {
	console.log('8080번 포트에서 서버 대기 중입니다!');
});
```



#### 미들웨어

하드웨어와 소프트웨어의 중간 것을 다 미들웨어라고 부른다

app.use 안에 들어가는 것들은 다 미들웨어



### Session

app.js 에 다음 코드를 추가

```js

app.use(session({
    resave:false, //다시 저장하지 않음
    saveUninitialized:true, //초기화 되지 않아도 저장하겠다
    secret:'아무 값', //세션 암호화 비밀키
    cookie: {
        httpOnly:true,  //쿠키가 탈취가 되지 않도록
        secure:false  //https를 사용할 것이냐 묻는 것
    }
}));

```

요청 처리시

`req.session`코드를 통해서 필요한 데이터를 처리

`req.session.id`, `req.session.basket`등 세션에 있는 필요한 변수 이름을 찾아서 값을 받아서 사용한다







## EJS

html에서는 어떠한 동적인 처리도 할 수 없기 때문에 동적 처리가 가능한 jsp, php, ejs, pug 등을 사용해야 한다

그중에서 ejs는 jsp와 거의 똑같은 문법을 사용하지만 jsp는 java엔진을 사용하고 ejs는 javascript엔진을 사용한다는 차이점이 있다

그래서 이번에는 ejs를 사용한다



#### ejs 설정

먼저 콘솔 창에서 ` npm i ejs` 로 ejs 패키지를 설치한다 

설치후 app.js와 같은 경로에 views폴더를 생성하고 그 폴더 아래 index.ejs 파일을 생성

<u>**폴더와 파일이름은 반드시 views와 index.ejs이어야 한다**</u>

그리고 이전에 index.html의 내용을 그대로 index.ejs에 복붙

routes폴더 밑에 index.js 파일을 생성하고 다음과 같이 코딩한다

```js
const express=require('express');
const router=express.Router();


router.get('/', (req,res,next)=>{
    let logined;
    if(req.session.email){  //로그인 되어있는지 여부를 알기 위해 email session의 상태 확인
        logined=true;
    }
    res.render('index',{flag:logined, name:req.session.name}); //로그인 되어있을 시에는
                            //logined의 신호가 true, name에는 로그인 한 사람의 이름이 넘어간다
});

module.exports=router;
```



app.js 에서 `app.set('view engine', 'ejs');` 을 선언해주고 루트 경로에 대한 router설정도 해준다

`const indexRouter=require('./routes/index');`

`app.use('/', indexRouter);` 



#### ejs 사용

우리가 사용하고자 하는 부분은 로그인 시에는 로그아웃 버튼, 로그아웃 시에는 로그인 버튼이 생성되게 동적으로 만드는 부분이다



로그인 부분에 다음과 같이 코딩한다

```ejs
<%
 	if(flag){  <!--넘어온 flag의 값으로 로그인 상태인지 아닌지 판단-->
%>
 	<span><%= name %>님 로그인 상태</span><!--index.js에서 name의 값을 받아와서 화면에 출력한다-->
 	<input id="logout_btn" class="btn btn-danger" type='button' value='logout'>
<%
 	}else{
%>
	<input type='text' value='tkdansg@naver.com' id='login_email'>
    <input id="login_btn" class="btn btn-success" type='button' value='login'>
<%
    }
%>
```

변수의 값을 출력할 때에는 <%= %> (expression:표현식)을 이용해서 출력한다 위의 코드처럼 name의 값을 출력하려면 <%= name %> 이런식으로 출력하면 된다.

<% %> (스크립트릿)은 ejs파일 안에서 if문이나 for문, 변수 선언 등을 할 때 사용한다. 사용방법은 위의 코드처럼 태크를 열고 닫고 하는 불편함이 있다.



## mysql 연결

콘솔 창에 `npm i mysql` 명령어로 mysql설치

routes폴더 밑에 dbcon.js 파일 생성 db에 연결할 객체를 모듈로 생성한다

```js
const mysql=require('mysql');  //mysql패키치 require

const con = mysql.createConnection({   //db에 연결할 con객체 생성
    host: "localhost",		//host 이름
    database: "nodejs",		//연결할 db이름
    user: "root",			//사용자 이름
    password: "mysql",		//사용자 이름의 비밀번호
    port: "3307"			//사용할 포트 번호
});
  
module.exports=con;
```

생성된 객체는 회원가입이나 로그인시에 insert, select문으로 사용한다

회원가입시 insert문

```js
con.connect((err)=>{
        //if (err) throw err;		//이대로 처리하면 에러 발생시 서버가 종료됨
    	if(err){					//따로 에러처리
            console.log(err);	//일단 에러를 띄워준다
        }
        console.log("Connected!");	//생략가능
        const name=req.body.name;   		//사용자로 부터 받은 name
        const email=req.body.email;			// email
        const comments=req.body.comments;	// comments
        var sql = `INSERT INTO members (name, email, comments) VALUES ('${name}', '${email}', '${comments}')`;    	//사용하는 쿼리문을 sql변수에 담아준다
        
        con.query(sql, (err, result)=>{	//sql에 담은 쿼리문을 실행하고 err, result를 받는다
            if (err){					//쿼리문 실행 실패시
                console.log("insert fail", err); 
                res.json({message: "회원가입 실패"});
            }else{						//쿼리문 성공시
                console.log("1 record inserted");
                res.json({message: "회원가입 되었습니다"});
            }
        });
    });
```

로그인시 select문 사용

```js
con.connect((err)=>{

    if (err) throw err;
    console.log("Connected!"); 
    const email=req.body.email; 	//값을 비교할 email 값을 넣어준다

    var sql = `select * from members where email = '${email}'`;  //sql변수에 쿼리문 저장
        
    con.query(sql, (err, result)=>{  //쿼리문 실행 err와 result를 리턴받음
        if (err){
            console.log("insert fail", err);    
            res.json({message: "로그인 실패"});
        }else{
            if(result[0]){		//email의 값이 존재할 경우 참 없는경우 거짓 (result=[])
                console.log("login success");
                const name=result[0].name;
                req.session.email=email;
                req.session.name=name;
                res.json({message: `${name}님 로그인 되었습니다`});
            }else{
                console.log("no have email");
                res.json({message: "없는 이메일입니다"});
            }
        }
    });
});
```



























