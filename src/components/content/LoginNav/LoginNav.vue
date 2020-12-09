<template >
  <div class="clear-fix header-top-con">
    <nav id="login-header-nav" class="login-header-nav">
      <div class="nav-parent clear-fix">
        <slot></slot>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "LoginNav"
}
</script>

<style scoped>
#login-header-nav {
  position: relative;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
}


</style>