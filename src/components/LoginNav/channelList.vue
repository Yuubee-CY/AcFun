<template>
  <div class="channel-list-wrapper">
    <ul class="channel-list">
      <li v-for="item in channelList">
        <a :href="item.hrefUrl">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "channelList",
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
    }
  }
</script>

<style scoped>

</style>