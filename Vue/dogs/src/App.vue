<template>
  <div id="app">
    <h1>Dog & Cat</h1>
    <Buttons @dogButtonClicked="getDog" @catButtonClicked="getCat"/>
    
    <CatImage :catImages="catImages"/> 
    <DogImage :dogImages="dogImages"/> 
  </div>
</template>

<script>
import axios from 'axios'

import CatImage from './components/CatImage.vue'
import DogImage from './components/DogImage.vue'
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
      catImages:[],
      dogImages:[]
    }
  },
  methods:{
        getDog(){
            axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response=>{
                console.log(response.data.message)
                this.dogImages.push({id:this.dogImages.length, url:response.data.message})
            })
            .catch(err=>{
                console.log(err)
            })
        },
        getCat(){
            axios.get('https://api.thecatapi.com/v1/images/search')
            .then(response=>{
                console.log(response.data[0].url)
                this.catImages.push({id:response.data[0].id, url:response.data[0].url})
            })
            .catch(err=>{
                console.log(err)
            })
        },
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
