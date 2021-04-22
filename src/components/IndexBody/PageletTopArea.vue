<template>
  <div id="pagelet_top_area">
    <div class="top_slider_area">
      <div class="top-slider">
        <swiper
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(item, key) in this.SwiperItemTile">
            <img :src="SwiperItemSrc[key]" :alt="item">
            <p>{{ item }}</p>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <ul class="slider-right-images">
    </ul>
  </div>
</template>

<script>
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import axios from "axios"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default {
  name: "PageletTopArea",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      // SwiperItem: this.$store.state.swiperItem.swiperItem,
      SwiperItemTile: [],
      SwiperItemUrl: [],
      SwiperItemSrc: []
    }
  },
  methods: {},
  mounted() {

    // let httpAC = "https://www.acfun.cn";

    let httpAC = "/api";

    async function req(httpAC) {
      return new Promise((resolve, reject) => {
        axios.get(
          httpAC, {}).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        })
      })
    }

    function getUrl(res) {
      let reg = /\\"link\\":\\"(.*?)\\",\\"description\\":/igs
      let data = res.data
      let arr = []
      let result
      while (result = reg.exec(data)) {
        // console.log("result",result)
        arr.push(result[1])
      }

      let arrRes = []

      arr.forEach(i => {
        let jointUrl = "https://www.acfun.cn"
        let temp = jointUrl.concat(i)
        let reg = /https:\/\/www.acfun.cnhttps:\/\/hd.acfun.cn/;
        let replaceStr = "https://hd.acfun.cn"
        let tempUrl = temp.replace(reg, replaceStr)
        let regUrl = /https/g
        // if ( tempUrl.match(regUrl).length >= 2){
        //   arrRes.push(tempUrl.replace(/https:\/\/www.acfun.cn/,""))
        // }else arrRes.push(temp.replace(reg, replaceStr))
        tempUrl.match(regUrl).length >= 2
          ? arrRes.push(tempUrl.replace(/https:\/\/www.acfun.cn/,""))
          : arrRes.push(temp.replace(reg, replaceStr))
      })
      return arrRes
    }

    function getTitle(res) {
      let reg = /\\"title\\":\\"(.*?)\\",?/igs
      let data = res.data
      let arr = []
      let result
      while (result = reg.exec(data)) {
        arr.push(result[1]);
      }
      return arr
    }

    function getSrc(res) {
      let reg = /\\"image\\":\\"(.*?)\\",?/igs
      let data = res.data
      let arr = []
      let result
      while (result = reg.exec(data)) {
        // console.log("result",result)
        arr.push(result[1])
      }
      return arr
    }

    axios.all([req(httpAC)]).then(
      axios.spread((res) => {
        this.SwiperItemUrl = getUrl(res)
        this.SwiperItemTile = getTitle(res)
        this.SwiperItemSrc = getSrc(res)
      })
    )
  }
}
</script>

<style scoped>

</style>
