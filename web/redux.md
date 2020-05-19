# 리덕스 사용하기



먼저 리덕스 cdn을 가져온다

`<script src="https://unpkg.com/redux@latest/dist/redux.js"></script>`

리덕스 cdn을 가져온 뒤에 콘솔 창에서 Redux를 찍어보면 Redux가 가지고 있는 함수들을 확인 할 수 있다

그중에서 createStore 사용한다

`const store = Redux.createStore()`

이런 뒤에 store를 찍어보면 reducer가 필요하다는 에러가 나온다

위쪽에다 reducer를 정의해준다

`function reducer(){}`

그 후에 createStore를 다시 호출할 때 reducer를 인자로 넣어준다

`const store = Redux.createStore(reducer)`

그러면 이제 store를 콘솔로 찍어보면 store가 가지고 있는 함수들을 확인 할 수 있다

그 중에서 getState()함수를 호출해서 콘솔록 찍어본다

`const state = store.getState();`

결과값으로 undefined가 나온다 

이제 reducer에서 state를 저의해준다 먼저 reducer에서는 state와 action을 인자값으로 받는다

```js
function reducer(state, action){
    if(state===undefined){
        state=[];
    }
    return state;
}
```

이제 값을 넣어보기 위해서 input태그와 button을 하나 만들고 jquery를 이용해서 값을 받아본다

jquery는 다음과 같이 작성한다





1. Store

저장소

2. Action

요청(증가 감소)

3. Dispatcher

Action store에 전달

4. Reducer

store에 저장된 상태변수를 변경





index.html -> index.js -> App.js



Redux는 반드시 React와 연동할 수 있다 .( X )

React-Redux 





