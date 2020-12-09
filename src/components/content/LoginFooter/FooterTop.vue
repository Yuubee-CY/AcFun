<template>
  <div class="clear-fix footer-top" ref="footerTop">
    <div class="fl footer-nav">
      <div :class="item.footerNavDivClassName" v-for="(item,index) in footerNav">
        <h5>{{ item.title }}</h5>
        <p>
          <a href="javascript:;" :class="item2.ItemClassName"
             v-for="item2 in item.footerNav">{{ item2.footerNavItem }}
          </a>
        </p>
      </div>
    </div>
    <div class="fr no-select footer-avatar-ac" @click="addCount">
        <img ref="acImg" id="acImg" width="70" height="61" loading="lazy" :src="acUrl">
        <span class="num" ref="num"> {{ countNum }} </span>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "FooterTop",
  data() {
    return {
      footerNav: this.$store.state.footerNav.footerNavBody,
      infoRiseItem: [],
      oldDate: '',
      countNum: 0,
      distance: '',
      infoRiseClassName: 'info-rise info-rise-animation',
      acUrl: "//cdnfile.aixifan.com/static/umeditor/emotion/images/ac/" + Math.ceil(Math.random() * 55) + ".gif",
      isShowItem : false,
      countStartTime: 0,
      countEndTime: 0
    }
  },
  methods: {
    addCount(e) {
      if (this.$refs.num.className == 'num') {
        this.$refs.num.className += ' count-num'
      }
      this.$store.commit('addFooterNavCount')
      this.countNum = this.$store.state.footerNavCount
      const step = 10
      if (this.countNum % step == 0 && this.countNum > 0) {
        let acUrlNum = Math.ceil(Math.random() * 55)
        $('#acImg').animate({
          opacity: 0
        },300,() => {
          this.acUrl = "//cdnfile.aixifan.com/static/umeditor/emotion/images/ac/" + acUrlNum + ".gif"
          $('#acImg').animate({
            opacity: 1
          },300)
        })
      }
      if(this.countNum == 1){
        this.countStartTime =parseInt( new Date().getTime()/1000);
      }
      if (this.countNum % 50 == 0 && this.countNum > 0) {
        this.countEndTime = parseInt( new Date().getTime()/1000);
        let timing = this.countEndTime - this.countStartTime
        let APM = parseInt(this.countNum/timing*60)
        let countP = document.createElement('p')
        let countSpan = document.createElement('span')
        let countI = document.createElement('i')
        countSpan.innerHTML = '连续点击了' + this.countNum + '次，APM为'+APM+'次/分'
        let gToast = this.$refs.acImg.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2]
        if(gToast.children.length > 0){
          for(let i = 0; i <= gToast.children.length; i++){
            gToast.children[i].remove()
          }
        }
        gToast.appendChild(countP)

        let ToastP = this.$refs.acImg.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2].children[0]
        if(countI.className.indexOf('icon icon-info') == -1){
          countI.className = 'icon icon-info'
        }
        if(ToastP){
          if(ToastP.className.indexOf('info undefined') == -1){
            ToastP.className = 'info undefined'
          }
        }
        ToastP.appendChild(countI)
        ToastP.appendChild(countSpan)
        $('.info').animate({
          left: 0
        }, 500 ,() => {
          $('.info').animate({
            left: 0
          }, 3000 ,() => {
            $('.info').animate({
              left: '-100%'
            }, 500 ,() => {
              ToastP.remove()
            })
          })
        })
      }
      this.addInfoRise()

    },
    addInfoRise() {
      const footerCon = this.$refs.footerTop.parentNode
      const infoRise = this.$refs.infoRise
      // console.log(infoRise)
      const spanNode = document.createElement('span')
      footerCon.appendChild(spanNode)
      if (spanNode.className == '') {
        spanNode.className += 'info-rise info-rise-animation'
        spanNode.innerHTML = '+1 Click'
      }
      spanNode.addEventListener("webkitAnimationEnd", () => { //动画结束时事件
        spanNode.remove()
      }, false);
    },
  }
}
</script>

<style scoped>

</style>