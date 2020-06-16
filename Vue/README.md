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



### Props

다른 컴포넌트간에 데이터 전달

상위 컴포넌트에서 다음과 같이 값을 넘겨준다

```vue
<template>
	<Buttons :msg="msg"/>
</template>
<script>
	import Buttons from './components/Buttons.vue'
    
    export default{
        name:'App',
        components:{
            Buttons,
        }
        data(){
            return {
                msg:"message"
            }
        }
    }

</script>
```

그러면 하위 컴포넌트에서 다음과 같이 받아서 사용한다

```vue
<template>
    <div>
        {{msg}}
    </div>
</template>

<script>

export default {
    name:"Buttons",
    props:{
        msg:String
    }
}
</script>
```





### emit

자식 컴포넌트가 부모 컴포넌트에게 이벤트 전달

이벤트가 일어나는 컴포넌트에서 버튼을 클릭시 해당하는 함수를 정의하고

함수 내부에서 $emit을 사용해 이벤트 이름을 정의 해준다 

정의 된 이벤트는 상위 컴포넌트로 전달된다



```vue
<template>
    <div>
        <button @click="Clicked">Test Button</button>
    </div>
</template>

<script>
export default {
    name:"button",
    methods:{
        Clicked(){
            this.$emit('ButtonClicked')
        },
    }
}
</script>
```

상위 컴포넌트에서 다음과 같이 v-on을 통해 ButtonClicked라는 사용자 정의된 이벤트를 받을 수 있고

해당 이벤트 발생시 호출할 함수를 정하고 실행한다



```vue
<template>
	<div>
	    <Buttons @ButtonClicked="writeMsg"/>
        {{msg}}
    </div>
</template>

<script>
import Buttons from './components/Buttons.vue'

export default {
  name: 'App',
  components: {
    DogImage,
    CatImage,
    Buttons
  },
  data(){
	return {
		msg:""
    }
  }
  methods:{
        writeMsg(){
            this.msg="button clicked !"
        },
    }
}
</script>
```





## extention

vetur

- vs code에서 유용하게 파일을 볼 수 있기 위해 설치