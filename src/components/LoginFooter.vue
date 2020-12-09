<template>
  <Footer>
    <footer-top></footer-top>
    <footer-link></footer-link>
    <footer-bottom></footer-bottom>
  </Footer>
</template>

<script>
import Footer from "./content/LoginFooter/Footer";
import FooterTop from "./content/LoginFooter/FooterTop";
import FooterLink from "./content/LoginFooter/FooterLink";
import FooterBottom from "./content/LoginFooter/FooterBottom";

export default {
  name: "LoginFooter",
  components: {FooterBottom, FooterLink, FooterTop, Footer}
}
</script>

<style scoped>
@import "../assets/css/LoginFooter.css";
</style>