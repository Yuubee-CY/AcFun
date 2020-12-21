<template>
  <div class="footer-bottom">
    <a href="javascript:;">
      <img :src="imgUrl" width="78" height="24" loading="lazy">
    </a>
    <p>Copyright © 2007-2020 AcFun. 保留所有权利</p>
  </div>
</template>

<script>
export default {
  name: "FooterBottom",
  data(){
    return{
      imgUrl: require("../../../assets/img/LoginFooterImg/logo-gray.png")
    }
  }
}
</script>

<style scoped>

</style>