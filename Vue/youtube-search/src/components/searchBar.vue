<template>
    <div>
        <div>  
            <input @keypress.enter="input" type="text" v-model="searchValue">
        </div>
        <div>
        </div>
        <ul>
            <li v-for="(result, idx) in results" :key="result.id.videoId" >
                <div>
                    <iframe width="560" height="320" v-if="idx===0" :src="whatchURL+result.id.videoId"></iframe>
                </div>
                <img :src="result.snippet.thumbnails.default.url" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SearchBar',
    data(){
        return{
            searchValue:'',
            results: [],
            whatchURL: "https://www.youtube.com/embed/",
        }
    },
    methods:{
        input(){
            const baseURL="https://www.googleapis.com/youtube/v3/search"
            const API_KEY= process.env.VUE_APP_YOUTUBE_API_KEY
            axios.get(baseURL, {
                params:{
                    key:API_KEY,
                    part: "snippet",
                    type:'video',
                    q: this.searchValue,
                    maxResults:10,
                }
            })
            .then(response =>{
                this.results=response.data.items
                console.log(response.data.items)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

}
</script>

<style>

</style>