<template>
  <div>
        <h1>Todo List의 List</h1>
        <p>{{title}}</p>
        <ul>
            <li v-for="todo in todos" v-bind:key="todo.id">
                {{todo.content}}
            </li>
        </ul>
  </div>
  
</template>

<script>
export default {
    name: 'TodoList',
    data() {
        return {
            title: 'This is title',
            
        }
    },
    props:{
        todos: Array
    }

}
</script>

<style>

</style>