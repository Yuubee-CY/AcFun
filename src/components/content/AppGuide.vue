<template>
  <div class="app-guide" ref="appGuide">
    <div class="app-guide-content wp">
      <img class="guide-ac" :src="require('../../assets/img/AppGuide/acimg.png')" alt="ac娘">
      <img class="guide-text" src="../../assets/img/AppGuide/download-app-0.png" alt="ac娘">
      <img id="qrcode" class="guide-qrcode" src="../../assets/img/AppGuide/createqrcode.png" width="100%" height="100%">
      <span class="autoClose">{{ autoClose }}秒自动关闭</span>
      <div id="guide-close" class="guide-close" @click="appGuideHide()"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppGuide",
  data() {
    return {
      autoClose: 10
    }
  },
  methods: {
    appGuideHide() {
      this.$refs.appGuide.className += ' app-guide-hide'
    }
  },
  mounted() {
    this.$refs.appGuide.className = 'app-guide'
    this.$refs.appGuide.style.transform = 'translateX(0px)'
    setTimeout(() => {
      setInterval(() => {
        if (this.autoClose > 1) {
          this.autoClose -= 1
        } else {
          this.appGuideHide()
        }
      }, 1000)
    }, 1500)

  }
}
</script>

<style scoped>
@import "../../assets/css/AppGuide.css";
</style>