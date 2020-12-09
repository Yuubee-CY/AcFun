<template>
  <Header>
    <login-nav>
      <nav-left></nav-left>
      <search-container></search-container>
      <header-guide></header-guide>
    </login-nav>
  </Header>
</template>

<script>
import Header from "./content/LoginNav/Header";
import LoginNav from "./content/LoginNav/LoginNav";
import NavLeft from "./content/LoginNav/NavLeft";
import SearchContainer from "./content/LoginNav/SearchContainer";
import HeaderGuide from "./content/LoginNav/HeaderGuide";

export default {
  name: "LoginHeader",
  components: {
    Header,
    LoginNav,
    NavLeft,
    SearchContainer,
    HeaderGuide
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