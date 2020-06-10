# Vue



#### 핵심

1. SPA
   - Single Page Application
   - 페이지 전환 없이(새로운 요청 응답 없이) UI 변화
   - 사용자 편의 - 페이지 리로드 없이 사용
   - 서버 리소스 절약
2. MVVM (Model View ViewModel)
   - MVC
     - 모델 - DB와 통신하여 작업이 이루어짐
     - 뷰 - 화면에 보여지는 html 부분
     - 컨트롤러 - 뷰와 모델을 연결해주는 일을 수행
   - 모델과 뷰가 연결되어 있어서 모델이 바뀌면 자동으로 뷰가 바뀐다

3. Declarative Programming
   - 선언적 프로그래밍 <-> 명령형 프로그래밍(Imperatie Programming)
   - 명령형 
     - 절차적, 변화를 단계적으로 명령  
     - vanilla javascript DOM 조작
   - 선언형
     - 변화를 선언 (그림 그리기)
     - 프레임워크를 통한 조작



## Vue JS의 요소 

### 선언적 랜더링

```html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: '안녕하세요 Vue!'
  }
})
```



### Directive(지시자)



#### v-for

- 배열과 같은 데이터들을 순회

```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'JavaScript 배우기' },
      { text: 'Vue 배우기' },
      { text: '무언가 멋진 것을 만들기' }
    ]
  }
})
```



#### v-if 

- 조건부 랜더링

```html
<div id="app-3">
  <p v-if="seen">이제 나를 볼 수 있어요</p>
</div>
```

```js
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```

#### v-else

```html
<div id="app-3">
  <p v-if="seen">이제 나를 볼 수 있어요</p>
  <p v-else>이제 나를 볼 수 없어요</p>
</div>
```

```js
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
})
```



#### v-bind

exe) `v-bind:class="{className: true or false}"`

- `v-bind:class` => `:class` 로 축약 가능

```html
<style>
    .testClass{
        text-decoration:line-through
    }
</style>
<div id="app-3">
    <p v-bind:class={testClass:test.value}>exe</p>
</div>
```

```js
var app3 = new Vue({
  el: '#app-3',
  data: {
    value: true
  }
})
```



#### v-on

- 이벤트 바인딩
- `v-on:input` => `@input` 으로 축약 가능

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">메시지 뒤집기</button>
</div>
```

```js
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: '안녕하세요! Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```

메세지 뒤집기 버튼을 클릭시 reverseMessage 함수가 호출 되서 해당 메세지를 뒤집어서 출력한다



#### v-model

- 양방향 데이터 바인딩

```html
    <div id="app">
        <input type="text" v-model="inputText">
        <p>{{inputText}}</p>
    </div>
```

```js
const app = new Vue({
    el:'#app',
    data: {
        inputText:''
    }
})
```

input 창에 값을 입력하면 실시간으로 p테그에 입력한 값이 들어간다



#### v-text

`{{name}}` 과 `<div v-text="name"` 는 동일



#### v-html

- vue에서 전달해 주는 값이 태그가 있을 경우 랜더링해서 보여준다

```html
    <div id="app">
        <input type="text" v-html="inputHtml">
    </div>
```

```js
const app = new Vue({
    el:'#app',
    data: {
        inputText:'<h1>hello</h1>'
    }
})
```



### Vue Instatnce(객체)



- `el: '#app'` : Vue 객체의 마운트 포인트
- `data:{}`: 관리할 데이터
- `methods:{}`: 함수
- `comouted:{}` : 함수화된 데이터

- `watch:{}` : 데이터 변경에 대한 콜백 

#### 

## Vue life syscle hook

- `created()` : 객체 생성 직후
- `beforeMount()`

---

dom이 보이기 시작