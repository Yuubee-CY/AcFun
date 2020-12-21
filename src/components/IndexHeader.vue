<template>
  <top-header></top-header>
  <pagelet-banner></pagelet-banner>
</template>

<script>
import TopHeader from "@/components/IndexHeader/TopHeader";
import PageletBanner from "@/components/IndexHeader/PageletBanner";
export default {
  name: "IndexHeader",
  components:{
    TopHeader,
    PageletBanner
  }
}
</script>

<style scoped>

</style>