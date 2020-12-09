<template>
  <login-header></login-header>
  <login-body></login-body>
  <login-footer></login-footer>
</template>

<script>
import LoginHeader from "../components/LoginHeader";
import LoginBody from "../components/LoginBody";
import LoginFooter from "../components/LoginFooter";
  export default {
    name: "Login",
    components:{
      LoginFooter,
      LoginHeader,
      LoginBody
    }
  }
</script>

<style scoped>

</style>