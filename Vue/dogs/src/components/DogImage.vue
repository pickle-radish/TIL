<template>
    <div>
        <span v-for="image in dogImages" :key="image.id">
            <img :src="image.url" alt="" width="300px" height="300px"/>
        </span>
    </div>
</template>

<script>

export default {
    name:"DogImage",
    props:{
        dogImages: Array
    }
    
}
</script>

<style>

</style>