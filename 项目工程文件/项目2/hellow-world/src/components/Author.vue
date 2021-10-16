<template>
  <img class="image" :src="url" alt="这是头像" :style="{
      width:size + 'px',
      height:size + 'px'
  }">
</template>

<script>
export default {
    props:{
        url:{
            type:String,
            required:true
        },
        size:{
            type:Number,
            required:true
        }
    }
}
</script>

<style scoped>
.image{
    border-radius: 50%;
    object-fit: cover;
    display: block;
}
</style>