<template>
  <login-header></login-header>
  <login-body></login-body>
  <main-footer></main-footer>
</template>

<script>
import LoginHeader from "components/LoginHeader";
import LoginBody from "components/LoginBody";
import MainFooter from "components/MainFooter";
  export default {
    name: "Login",
    components:{
      MainFooter,
      LoginHeader,
      LoginBody
    }
  }
</script>

<style scoped>

</style>