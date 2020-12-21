<template>
  <div class="top_slider_area">
    <div class="top-slider" style="width: 482px; height: 247px; display: inline-block">
      <swiper style="width: 482px; height: 247px;"
              :slides-per-view="1"
              :space-between="50"
              :pagination="{ clickable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
      >
        <swiper-slide><img src="../assets/img/IndexBanner/image_container1.png" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/IndexBanner/image_container2.png" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/IndexBanner/image_container3.png" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/IndexBanner/image_container4.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/IndexBanner/image_container5.png" alt=""></swiper-slide>
      </swiper>
    </div>
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
  name: "HomeMainContent",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {}
  },
  methods: {
    onSwiper(swiper) {
    },
    onSlideChange() {
      console.log('slide change')
    },
  },
}
</script>

<style scoped>

</style>