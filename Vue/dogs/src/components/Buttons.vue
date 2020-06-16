<template>
    <div>
        <button style="position:fixed" @click="catClicked">냥이 이미지 가져오기</button>
        <button @click="dogClicked">댕이 이미지 가져오기</button>
    </div>
</template>

<script>
export default {
    name:"button",
    methods:{
        dogClicked(){
            this.$emit('dogButtonClicked')
        },
        catClicked(){
            this.$emit('catButtonClicked')
        }
    }
}
</script>

<style>

</style>