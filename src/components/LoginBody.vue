<template>
  <login-main>
    <login-container></login-container>
  </login-main>
</template>

<script>
import LoginMain from "./content/LoginBody/LoginMain";
import LoginContainer from "./content/LoginBody/LoginContainer";
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