<template>
  <top-header></top-header>
  <pagelet-banner></pagelet-banner>
  <pagelet-navigation></pagelet-navigation>
</template>

<script>
import TopHeader from "@/components/IndexHeader/TopHeader";
import PageletBanner from "@/components/IndexHeader/PageletBanner";
import PageletNavigation from "@/components/IndexHeader/PageletNavigation";
export default {
  name: "IndexHeader",
  components:{
    TopHeader,
    PageletBanner,
    PageletNavigation
  }
}
</script>

<style scoped>

</style>