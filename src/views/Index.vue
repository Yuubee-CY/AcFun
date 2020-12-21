<template>
  <index-header></index-header>
  <main-footer></main-footer>
</template>

<script>
import IndexHeader from "@/components/IndexHeader";
import MainFooter from "@/components/MainFooter";
  export default {
    name: "Index",
    components: {
      IndexHeader,
      MainFooter,
    }
  }
</script>

<style >
  @import "../assets/css/Index.css";

</style>