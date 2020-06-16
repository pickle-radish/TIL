<template>
    <div>
        <span v-for="image in catImages" :key="image.id">
            <img :src="image.url" alt="" width="30%" height="30%"/>
        </span>
    </div>
</template>

<script>
export default {
    name:"CatImage",
    props:{
        catImages: Array
    }
}
</script>

<style>

</style>