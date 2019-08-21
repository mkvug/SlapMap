<template>
  <footer>
    SlapMap &copy; {{ year }}
  </footer>
</template>

<script>
export default {
  name: 'GlobalFooter',
  computed: {
    year: function() {
        var d = new Date();
        return d.getFullYear();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
footer{
    position: fixed;
    bottom: 10px;
    left: 0;
    z-index: 10;
    text-align: center;
    width: 100%;
}
</style>