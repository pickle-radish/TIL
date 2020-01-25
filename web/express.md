## express 사용하기

1. 새 폴더 project2 생성

2. vscode로 열고 터미널 창에서 npm init 으로  package.json 생성(디폴트 값으로 다 엔터)

3. 터미널 창에서 npm i express 입력

4. app.js 생성

   ```js
   const express=require('express');
   const app=express(); //jsp의 servlet 역할
   
   app.listen(3000, ()=>{
   	console.log('3000 port listen');
   });
   ```



5. package.json에서 scripts부분에 "start": node app, 추가

   ```js
   {
     "name": "project2",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "start": "node app" , // 새로 추가 ,는 반드시 찍어서 구분해준다
       "test": "echo \"Error: no test specified\" && exit 1"
      
     },
     "author": "",
     "license": "ISC",
     "dependencies": {
       "express": "^4.17.1"
     }
   }
   
   ```

6.  app.js파일에 get요청 처리 추가

   ```js
   app.get("/", (req, res)=>{  // "/" 루트 경로
       res.send("hello express..."); //응답 부분에 문자열 전송
   });
   ```

7.  html태그를 사용할 수 있는지 확인하기

   ```js
   app.get("/", (req, res)=>{  // "/" 루트 경로
       res.send("<h1>hello express...</h1>"); //응답 부분에 문자열 전송
   });
   ```

8. 이미지 태그 사용해 보기

   ```js
   app.get("/", (req, res)=>{  // "/" 루트 경로
       res.send("<h1>hello express...</h1>"); //응답 부분에 문자열 전송 html태그 적용
       res.send("<img src=''>")  // img태그 사용하기 이미지가 없을 경우 배꼽 표시라도 보여야 한다
   });
   ```

9. 이미지 태그를 위로 올리면 에러가 난다 send는 버퍼가 아니기 때문에 한번 전송되면 끝이다

   ```js
   app.get("/", (req, res)=>{  // "/" 루트 경로
       res.send("<img src=''>")  // img태그 사용하기 이미지가 없을 경우 배꼽 표시라도 보여야 한다
       res.send("<h1>hello express...</h1>"); //응답 부분에 문자열 전송 html태그 적용
   });
   ```

10.  write 함수로 버퍼를 사용하지만 여전히 에러가 난다

    ```js
    app.get("/", (req, res)=>{  // "/" 루트 경로
        
        res.write("<img src=''>")  // img태그 사용하기 이미지가 없을 경우 배꼽 표시라도 보여야 한다
        res.send("<h1>hello express...</h1>"); //응답 부분에 문자열 전송 html태그 적용
    });
    ```

11. 위의 방식으로 하면 html부분이 문서의 대부분을 잡아먹기 때문에 view 폴더에 저장된 html을 불러오는 방식으로 사용한다

12. public 폴더 생성후 폴더 안에 index.html 파일 생성

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <div>Hello Express</div>
            <img src=''>
        </body>
    </html>
    ```

13. app.js에  expres.static() 사용

    ```js
    const express = require('express');
    const path=require('path');  //정적인 파일을 불러올 때 경로를 지정하기 위해 사용
    const app = express();
    
    
    app.use(express.static(path.join(__dirname, 'public'))); //정적인 파일을 불러온다
    								// static은 단순히 경로지정 실제 서버일을 하는것을 app을 사용
    
    /*app.get("/", (req, res)=>{  // "/" 루트 경로
        es.senrd("<h1>hello express...</h1>"); //응답 부분에 문자열 전송 html태그 적용
        res.send("<img src=''>")  // img태그 사용하기 이미지가 없을 경우 배꼽 표시라도 보여야 한다
    });
    */
    
    app.listen(3000, ()=>{
        console.log('3000 port listen');
    });
    ```

14. 서버 재시작 (정적 컨텐츠는 수정후 서버 재가동 필요 없이 새로고침으로 가능)

15. 부트 스트랩 적용시 일반 파일과 똑같이 head부분에 meta태그를 추가해서 적용

16. css적용도 마찬가지로 index.html 파일과 같은 위치에 css파일을 만들고 이전과 같이 링크를 걸어준다

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
       
        <!-- 여기부터 -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">    
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    	<!-- 여기까지 부트스트랩-->
        <link rel="stylesheet" href="client.css"> <!--css링크 적용-->
    </head>
    <body>
        <div class="btn btn-primary my_width">Hello Express</div>
        <br><br>
        <img src='a.jpg' class='my_width'>
    
    
    </body>
    </html>
    ```

17. jquery도 똑같이 적용한다. 같은 경로에 client.js 파일을 생성후 다음 스크립트를 헤더에 추가한다

    ```html
    <script src="client.js"></script>
    ```

18. js파일은 다음과 같이 작성한다

    ```js
    $(document).ready(function(){
        $('#hello_div').click(function() {
            //alert();
            let login_form=`ID<input id="id"><br>`;
            login_form += `PW<input id="pw"><br>`;
            login_form += `<input id="login_btn" type="button" value="login">`;
            $('#login_div').html(login_form);
        });
    
        $(document).on('click', '#login_btn', function() {
            const id = $('#id').val();
            const pw = $('#pw').val();
            alert(id + " : " + pw);
        });
    });
    ```

19. 서버로 id pw정보를 전송하기 위해 다음 함수를 수정한다

    ```js
    $(document).on('click', '#login_btn', function() {
            const id = $('#id').val();
            const pw = $('#pw').val();
            //alert(id + " : " + pw);
    
            const send_param={
                id,  //비구조화 할당으로 id:id 입력과 같은 것이다
                pw 
            };
            $.post('login', send_param, function(returnData){
                alert(returnData.message);
            });
        });
    ```

20. app.js 파일을 수정하는데 함수를 잘 모를경우 구글에 express api doc 검색
    (궁금한게 있다면 ''이름' api doc  검색) 

21. 그 중 express.json은 expressjs.com

22. app.js 로그인 정보 받기

    ```js
    const express = require('express');
    const path=require('path');
    const app = express();
    
    
    app.use(express.static(path.join(__dirname, 'public')));
    
    app.use(express.json());  //json을 지원하는 함수 마찬가지로 express.json에서 처리한 것을 이 							app에서 사용한다
    app.use(express.urlencoded({extended:false})) //urlencoding 할 때 extended:false일 경우 													표준 처리하게 된다  >> 한글이 안깨지게 된다
    
    app.post("/login", (req, res)=>{
        const id = req.body.id;
        res.json({message: id+'님 로그인되셨습니다'});
    
    });
    
    
    app.listen(3000, ()=>{
        console.log('3000 port listen');
    });
    ```

23. 서버 파일을 수정할 때 마다 서버를 내렸다 올리는게 귀찮고 힘들경우 npm i -g nodemon설치
    package.json 파일중 "start":node app 을 "start: nodemon app" 으로 변경

    ```json
    {
      "name": "project2",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon app"  //node app 을 변경
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "express": "^4.17.1"
      }
    }
    ```

    

### 정리

1. project 파일 생성
2. 해당 프로젝트로 이동
3. npm init으로 package.js 생성 (디폴트값으로 다 엔터해서 생성)
4. npm i express
5. package.json에 start 속성 넣기
6. app.js 작성
7. require('express').... listen();
8. public 폴더를 만들어서 html, css, js, img등을 저장
9. http://localhost:port 으로 접속해서 확인
10. 이벤트 처리 확인을 위해서 client.js작성
11. client.js 에서 $post('url', 'send_param', callback) 요청하기
12. app.js 에서 post요청 처리
    app.post('/url', callback);  //url 앞에 / 를 반드시 붙여 주어야 한다
13. app.js 에 app.use(express.json()); 설정





















































