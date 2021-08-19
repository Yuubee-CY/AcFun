<template>
  <Footer>
    <footer-top></footer-top>
    <footer-link></footer-link>
    <footer-bottom></footer-bottom>
  </Footer>
</template>

<script>
import Footer from "./MainFooter/Footer";
import FooterTop from "./MainFooter/FooterTop";
import FooterLink from "./MainFooter/FooterLink";
import FooterBottom from "./MainFooter/FooterBottom";

export default {
  name: "LoginFooter",
  components: {FooterBottom, FooterLink, FooterTop, Footer}
}
</script>

<style scoped>
@import "../assets/css/MainFooter.css";
</style>