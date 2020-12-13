<template>
  <Header>
    <login-nav>
      <div class="logo" data-v-3f3dc5ca="" style="vertical-align: middle">
        <a href="javascript:;" data-v-3f3dc5ca="" style="display: block; line-height: 15px">
          <img src="/img/acfunlogo.11a98412.svg" width="88" height="27" loading="lazy" data-v-3f3dc5ca="">
        </a>
      </div>
      <search-container></search-container>
      <router-link to="/login" target="_blank" class="login-a">登录/注册</router-link>
      <header-guide></header-guide>
    </login-nav>
  </Header>
  <div id="pagelet_banner">
    <div class="page-top-banner">
      <a href="https://activity.acfun.cn/mega/ac-concert" target="_blank" class="banner-pic"></a>
      <a href="https://activity.acfun.cn/mega/ac-concert" target="_blank" class="banner-pendant"></a>
    </div>
  </div>
  <div id="pagelet_navigation">
    <div class="nav-left1">
      <div class="channel-guide1">
        <div class="channel-list-wrapper1">
          <ul class="channel-list1">
            <li v-for="item in channelList">
              <a :href="item.hrefUrl">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="top_slider_area">
    <div class="top-slider" style="width: 482px; height: 247px; display: inline-block">
      <swiper style="width: 482px; height: 247px;"
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide><img src="../assets/img/IndexNav/image_container1.png" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/IndexNav/image_container2.png" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/IndexNav/image_container3.png" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/IndexNav/image_container4.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/IndexNav/image_container5.png" alt=""></swiper-slide>
      </swiper>
    </div>
    <ul class="slider-right-images" style="display: inline-block">
      <img height="247" src="../assets/img/message/404img.png" alt="">
    </ul>
    <div class="message" style="display: inline-block; position: relative; left: 300px; top: -100px; font-size: 30px;width: 250px; color: #FD4C5D">
      <h2>后面是真没有了，下次一定</h2>
    </div>
  </div>
  <login-footer></login-footer>
</template>

<script>
  import LoginFooter from "@/components/LoginFooter";
  import Header from "@/components/content/LoginNav/Header";
  import LoginNav from "@/components/content/LoginNav/LoginNav";
  import NavLeft from "@/components/content/LoginNav/NavLeft";
  import SearchContainer from "@/components/content/LoginNav/SearchContainer";
  import HeaderGuide from "@/components/content/LoginNav/HeaderGuide";
  import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper.scss';
  import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/pagination/pagination.scss';
  import 'swiper/components/scrollbar/scrollbar.scss';
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  export default {
    name: "Index",
    components: {
      LoginFooter,
      SearchContainer,
      HeaderGuide,
      Header,
      LoginNav,
      NavLeft,
      Swiper,
      SwiperSlide,
    },
    data(){
      return{
        //二级导航栏的数据
        channelList: [
          {title: 'AC正义', hrefUrl: 'javascript:;'},
          {title: '番剧', hrefUrl: 'javascript:;'},
          {title: '动画', hrefUrl: 'javascript:;'},
          {title: '娱乐', hrefUrl: 'javascript:;'},
          {title: '生活', hrefUrl: 'javascript:;'},
          {title: '音乐', hrefUrl: 'javascript:;'},
          {title: '舞蹈·偶像', hrefUrl: 'javascript:;'},
          {title: '游戏', hrefUrl: 'javascript:;'},
          {title: '科技', hrefUrl: 'javascript:;'},
          {title: '影视', hrefUrl: 'javascript:;'},
          {title: '体育', hrefUrl: 'javascript:;'},
          {title: '鱼塘', hrefUrl: 'javascript:;'},
          {title: '文章', hrefUrl: 'javascript:;'},
        ],
      }
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper)
      },
      onSlideChange() {
        console.log('slide change')
      },
    }
  }
</script>

<style >
  @import "../assets/css/Index.css";
  .top-slider{
    border-radius: 5px;
    position: relative;
    left: 10%;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000 ;
    opacity: 0.2;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #FD4C5D;
    width: 16px;
    border-radius: 8px;
  }
  .top_slider_area{
    height: 252px;
  }
  .slider-right-images{
    position: relative;
    left: 250px;
    top: 10px;
  }
  .login-a{
    color: #999;
    font-size: 12px;
    position: absolute;
    right: 250px;
    z-index: 999;
  }
  .login-a:hover{
    color: #FD4C5D;
  }
</style>