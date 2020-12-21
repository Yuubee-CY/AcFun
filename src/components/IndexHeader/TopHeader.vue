<template>
  <Header class="index-header" data-c-w-i-header>
    <a href="/" class="fl logo"></a>
    <a class="fl niudan" href="https://shop213417608.taobao.com/" target="_blank">
      <i class="icon icon-shop"></i>
      <span>周边商城</span>
    </a>
    <search-box></search-box>
    <header-guide>
    </header-guide>
  </Header>
</template>

<script>
import Header from "@/components/content/Header";
import SearchBox from "@/components/content/SearchBox";
import HeaderGuide from "@/components/content/HeaderGuide";
import $ from 'jquery'
export default {
  name: "IndexHeader",
  components: {
    Header,
    SearchBox,
    HeaderGuide
  },
  data(){
    return{
    }
  },
  mounted() {
    $('.index-header')[0].childNodes[0].className += ' wp'
  }
}

</script>

<style scoped>
  @import "../../assets/css/TopHeader.css";
</style>