<template>
  <header>
    <img src="@/assets/slapmap.svg"><h1>SlapMap</h1>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    left: 20px;
    z-index: 10;
    img {
      width: 40px;
      position: relative;
      top: 10px;
    }
    h1 {
      font-size: 30px;
      display: inline-block;
    }
}
</style>