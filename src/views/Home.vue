<template>
  <div class="home_page">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  // layout: 'home',
  data() {
    return {}
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped>
.nav-item {
  padding: 0px 10px;
}

.weui-tabbar /deep/ p {
  color: #fff;
}
</style>
