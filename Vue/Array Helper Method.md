# Array Helper Method



`const arrNum = [1,2,3,4,5]`

`const arrStr = ['1', '2', '3', '4', '5']`



#### basic for

인덱스를 기준으로 하나씩 출력

```js
for (let i=0; i<arrNum.length; i++){
	console.log(arrNum[i])
}
```

순회문 사용

```js
for (let num of arrNum){
    console.log(num)
}
```





#### forEach

- 일반적으로 순회 목적으로 사용 할 경우

```js
arrNum.forEach(function(num){
    console.log(num)
})
```

다음과 같이 간략화 가능

```js
arrNum.forEach(num=>console.log(num))
```





#### filter

- 특정 조건을 만족하는 인덱스 요소를 뽑아낼 경우 사용

```js
arrNum = arrNum.filter(function(num){
	return num>3
})
```

간략화

```js
arrNum = arrNum.filter(num => num>3)
```

- function 생략 가능
- 넘겨 받는 인자가 하나일 경우에 괄호 생략 가능
- return되는 값이 한줄일 경우에 중괄호와 return생략 가능



#### map

- 순회를 하며 내부의 모든 요소에 동일한 작업을 해야하는 경우

- 숫자배열 <-> 글자배열, 동일한 데이터를 적용해야 하는 경우

```js
arrStr = arrStr.map(function(num){
	return parseInt(num)
})
```

간략화

```js
arrStr = arrStr.map(num=>parseInt(num))
```





#### reduce

- 순회를 하며 내부의 모든 요소를 하나의 값으로 환원해야 하는 경우

```js
arrNum = arrNum.reduce(function(acc,cur){
    return acc+cur;
})
```

간략화

```js
arrNum = arrNum.reduce((acc, cur) => acc+cur)
```





#### find









#### some









#### every



























