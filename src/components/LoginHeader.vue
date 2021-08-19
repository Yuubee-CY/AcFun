<template>
  <Header class="login-header" data-c-w-header>
    <login-nav>
      <nav-left>
        <channel-guide>
          <channel-list></channel-list>
        </channel-guide>
      </nav-left>
      <search-container>
        <search-box></search-box>
      </search-container>
      <header-guide></header-guide>
    </login-nav>
  </Header>
</template>

<script>
import Header from "./content/Header";
import LoginNav from "./LoginNav/LoginNav";
import NavLeft from "./LoginNav/NavLeft";
import channelList from "@/components/LoginNav/channelList";
import SearchContainer from "./LoginNav/SearchContainer";
import SearchBox from "@/components/content/SearchBox";
import HeaderGuide from "./content/HeaderGuide";
import channelGuide from "@/components/LoginNav/channelGuide";

export default {
  name: "LoginHeader",
  components: {
    Header,
    LoginNav,
    NavLeft,
    SearchContainer,
    SearchBox,
    HeaderGuide,
    channelList,
    channelGuide
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {}
}
</script>

<style scoped>
  @import '../assets/css/LoginHeader.css';
</style>