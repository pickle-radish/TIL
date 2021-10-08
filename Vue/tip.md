## template



binding 방식

```vue
<div :class="{ className }" :style="{ backgroundColor: color}">
    
</div>
```





component

- props  대신 `<slot></slot>` 사용

```html
<MyComponent>
	<span>props test</span>
</MyComponent>

-------------------------------------------

<div>
    <slot></slot>
</div>
```



for 객체분해

```vue
<li v-for="{id, name} in fruits" :key="id">
	{{ name }}
</li>
```



event

- event 객체 넘길 때

```vue
<button @click="handler('hi', $event)">
    click1
</button>
```

- 동시에 여러개 메소드 호출 
- 소괄호 꼭 입력

```vue
<button @click="handler1(), handler2()">
    click1
</button>
```





component 상속

```vue
<MyBtn class="heropy" style="color: red">
	Apple
</MyBtn>


---------------------------
<template>
	<div :class="$attrs.class" :style="$attrs.style"></div>
	<div v-bind="$attrs"></div>
</template>

<script>
export default {
    inheritAttrs: false, //기본적으로 상속을 사용하지 않음
}
</script>
```



provide, inject







## script

library

- shortid `npm i shortid`

```js
import shortid from 'shortid'

shortid.generate();
```



- moment





- event.preventDefault()
  - 이벤트 실행 방지











## style

- scoped (해당 vue 페이지에만 스타일 적용)

- 