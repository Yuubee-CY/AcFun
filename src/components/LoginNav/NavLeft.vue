<template>
  <div class="nav-left">
    <div class="logo">
      <a href="javascript:;">
        <img :src="imgSrc" width="88" height="27" loading="lazy">
      </a>
    </div>
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: "NavLeft",
    data(){
      return{
        //AcFunLogo图片
        imgSrc: require('../../assets/img/LoginNavImg/acfunlogo.svg'),
      }
    }
  }
</script>

<style scoped>

</style>