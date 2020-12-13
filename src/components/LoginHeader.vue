<template>
  <Header>
    <login-nav>
      <nav-left>
        <channel-list></channel-list>
      </nav-left>
      <search-container></search-container>
      <header-guide></header-guide>
    </login-nav>
  </Header>
</template>

<script>
import Header from "./content/LoginNav/Header";
import LoginNav from "./content/LoginNav/LoginNav";
import NavLeft from "./content/LoginNav/NavLeft";
import channelList from "@/components/content/LoginNav/channelList";
import SearchContainer from "./content/LoginNav/SearchContainer";
import HeaderGuide from "./content/LoginNav/HeaderGuide";

export default {
  name: "LoginHeader",
  components: {
    Header,
    LoginNav,
    NavLeft,
    SearchContainer,
    HeaderGuide,
    channelList
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