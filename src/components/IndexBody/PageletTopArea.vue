<template>
  <div id="pagelet_top_area">
    <div class="top_slider_area">
      <div class="top-slider">
        <swiper
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false
          }"
          :pagination="{clickable: true}"
          :lazy="{
            loadPrevNext: true,
            loadOnTransitionStart: true,
           }"
          :loadPrevNext="true"
          :loadOnTransitionStart="true"
          class="swiper-no-swiping"
        >
          <swiper-slide v-for="(item, key) in this.SwiperItemTile">
            <a :href="SwiperItemUrl[key]" target="_blank">
              <img :src="SwiperItemSrc[key]" :data-src="SwiperItemSrc[key]" :alt="item">
              <p>{{ item }}</p>
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <ul class="slider-right-images">
        <li v-for="(item, key) in this.HotItemTile">
          <a class="hot-video" :href="HotItemUrl[key]" target="_blank">
            <img :src="HotItemSrc[key]" :data-src="HotItemSrc[key]" :alt="item">
            <span class="hot-video-title text-overflow">{{ item }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Autoplay, Lazy} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/lazy/lazy.scss';

import axios from "axios"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Lazy]);
export default {
  name: "PageletTopArea",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      SwiperItemTile: [],
      SwiperItemUrl: [],
      SwiperItemSrc: [],
      HotItemTile: [],
      HotItemUrl: [],
      HotItemSrc: [],
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

    class SliderInfo {
      getSliderUrl(res) {
        let reg = /\\"link\\":\\"(.*?)\\",\\"description\\":/igs
        let data = res.data
        let arr = []
        let result
        while (result = reg.exec(data)) {
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
          tempUrl.match(regUrl).length >= 2
            ? arrRes.push(tempUrl.replace(/https:\/\/www.acfun.cn/, ""))
            : arrRes.push(temp.replace(reg, replaceStr))
        })
        return arrRes
      }

      getSliderTitle(res) {
        let reg = /\\"title\\":\\"(.*?)\\",?/igs
        let data = res.data
        let arr = []
        let result
        while (result = reg.exec(data)) {
          arr.push(result[1]);
        }
        return arr
      }

      getSliderSrc(res) {
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
    }

    class HotInfo {
      getHotUrl(res) {
        let reg = /log-item\\" href=\\"(.*?)\\"/igs
        let data = res.data
        let arr = []
        let result
        while (result = reg.exec(data)) {
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
          tempUrl.match(regUrl).length >= 2
            ? arrRes.push(tempUrl.replace(/https:\/\/www.acfun.cn/, ""))
            : arrRes.push(temp.replace(reg, replaceStr))
        })
        return arrRes
      }

      getHotTitle(res) {
        let reg = /<a class=\\"recommend-video log-item\\"(.*?)\\" data-title=\\"(.*?)\\"><img/igs
        let data = res.data
        let arr = []
        let result
        while (result = reg.exec(data)) {
          arr.push(result[2]);
        }
        return arr
      }

      getHotSrc(res) {
        let reg = /<a class=\\"recommend-video log-item\\"(.*?)\\"><img src=\\"(.*?)\\"/igs
        let data = res.data
        let arr = []
        let result
        while (result = reg.exec(data)) {
          arr.push(result[2])
        }
        return arr
      }
    }

    let HotInfoObj = new HotInfo();
    let SliderInfoObj = new SliderInfo();
    axios.all([req(httpAC)]).then(
      axios.spread((res) => {
        this.SwiperItemUrl = SliderInfoObj.getSliderUrl(res)
        this.SwiperItemTile = SliderInfoObj.getSliderTitle(res)
        this.SwiperItemSrc = SliderInfoObj.getSliderSrc(res)
        this.HotItemUrl = HotInfoObj.getHotUrl(res)
        this.HotItemTile = HotInfoObj.getHotTitle(res)
        this.HotItemSrc = HotInfoObj.getHotSrc(res)
      })
    )
  }
}
</script>

<style scoped>

</style>
