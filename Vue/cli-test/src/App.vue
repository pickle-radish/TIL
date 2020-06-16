<template>
  <div id="app">
    <HelloWorld msg="Welcome to Block Chain"/>
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    TodoList
  },
  data() {
    return {
      todos:[
                {id:1, content:'Vue.js 복습', isCompleted: false},
                {id:2, content:'node.js 복습', isCompleted: false},
                {id:3, content:'react.js 복습', isCompleted: false},
                {id:4, content:'JS.js 복습', isCompleted: false},
            ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
