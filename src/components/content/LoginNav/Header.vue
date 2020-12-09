<template>
  <div id="header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
#header {
  background: #000;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  line-height: 60px;
  top: 0;
  left: 0;
  font-size: 12px;
  z-index: 3;
}
</style>