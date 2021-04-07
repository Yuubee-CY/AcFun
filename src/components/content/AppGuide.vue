<template>
  <div class="app-guide" ref="appGuide">
    <div class="app-guide-content wp">
      <img class="guide-ac" :src="require('../../assets/img/AppGuide/acimg.png')" alt="ac娘">
      <img class="guide-text" src="../../assets/img/AppGuide/download-app-0.png" alt="ac娘">
      <img id="qrcode" class="guide-qrcode" src="../../assets/img/AppGuide/createqrcode.png" width="100%" height="100%">
      <div id="guide-close" class="guide-close" @click="appGuideHide()"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppGuide",
  methods: {
    appGuideHide(){
      this.$refs.appGuide.className += ' app-guide-hide'
    }
  },
  mounted() {
    this.$refs.appGuide.className = 'app-guide'
    this.$refs.appGuide.style.transform = 'translateX(0px)'
  }
}
</script>

<style scoped>
  @import "../../assets/css/AppGuide.css";
</style>