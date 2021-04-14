<template>
  <div id="pagelet_top_area">
    <div class="top_slider_area">
      <div class="top-slider">
        <swiper
                :slides-per-view="1"
                :space-between="50"
                :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="item in this.SwiperItem" >
            <img :src="item.imgUrl" :alt="item.altText">
            <p>{{item.imgInfo}}</p>
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
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default {
  name: "PageletTopArea",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      SwiperItem : this.$store.state.swiperItem.swiperItem
    }
  },
  methods: {
  },
}
</script>

<style scoped>

</style>