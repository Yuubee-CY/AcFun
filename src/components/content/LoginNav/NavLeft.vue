<template>
  <div class="nav-left">
    <div class="logo">
      <a href="javascript:;">
        <img :src="imgSrc" width="88" height="27" loading="lazy">
      </a>
    </div>
    <div class="channel-guide">
      <div class="guide-icon">导航</div>
      <div class="channel-list-wrapper">
        <ul class="channel-list">
          <li v-for="item in channelList">
            <a :href="item.hrefUrl">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavLeft",
    data(){
      return{

        //AcFunLogo图片
        imgSrc: require('../../../assets/img/LoginNavImg/acfunlogo.svg'),
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
    }
  }
</script>

<style scoped>

</style>