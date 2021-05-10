<template>
  <div id="home-main-content">
    <pagelet-top-area></pagelet-top-area>

    <div id="g-toast"></div>
  </div>
</template>

<script>
import PageletTopArea from "@/components/IndexBody/PageletTopArea";

export default {
  name: "HomeMainContent",
  components: {
    PageletTopArea
  }
}
</script>

<style scoped>
@import "../../assets/css/HomeMainContent.css";
</style>