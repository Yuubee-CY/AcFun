<template>
  <index-header></index-header>
  <home-main-content></home-main-content>
  <main-footer></main-footer>
  <app-guide></app-guide>
</template>

<script>
import IndexHeader from "components/IndexHeader/IndexHeader";
import HomeMainContent from "components/IndexBody/HomeMainContent";
import MainFooter from "components/MainFooter";
import AppGuide from "components/content/AppGuide";
  export default {
    name: "Index",
    components: {
      IndexHeader,
      MainFooter,
      HomeMainContent,
      AppGuide
    }
  }
</script>

<style >
  @import "../assets/css/Index.css";

</style>