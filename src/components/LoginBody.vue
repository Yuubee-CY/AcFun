<template>
  <login-main>
    <login-container></login-container>
  </login-main>
</template>

<script>
import LoginMain from "./LoginBody/LoginMain";
import LoginContainer from "./LoginBody/LoginContainer";
  export default {
    name: "LoginBody",
    components: {
      LoginMain,
      LoginContainer
    }
  }
</script>

<style scoped>
  @import "../assets/css/LoginBody.css";
</style>