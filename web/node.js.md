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













