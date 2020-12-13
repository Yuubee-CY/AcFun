<template>
  <router-view></router-view>
</template>

<script>
import "assets/css/base.css";
import "assets/css/acfun.css";
import Login from "./views/Login";
import Index from "@/views/Index";
  export default {
    components:{
      Login,
      Index
    }
  }
</script>

<style>
</style>
