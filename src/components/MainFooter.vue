<template>
  <Footer>
    <footer-top></footer-top>
    <footer-link></footer-link>
    <footer-bottom></footer-bottom>
  </Footer>
</template>

<script>
import Footer from "./content/MainFooter/Footer";
import FooterTop from "./content/MainFooter/FooterTop";
import FooterLink from "./content/MainFooter/FooterLink";
import FooterBottom from "./content/MainFooter/FooterBottom";

export default {
  name: "LoginFooter",
  components: {FooterBottom, FooterLink, FooterTop, Footer}
}
</script>

<style scoped>
@import "../assets/css/MainFooter.css";
</style>