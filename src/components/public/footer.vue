<template>
  <section>
    <tabbar
      class="nav-bottom"
      style="position: fixed;background-color:#3c3c3c; "
    >
      <tabbar-item selected :link="{ name: 'home' }">
        <span slot="label">home</span>
      </tabbar-item>
      <tabbar-item :link="{ name: 'about' }">
        <span slot="label">about</span>
      </tabbar-item>
    </tabbar>
  </section>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-left: 0px;
}
.navbar {
  padding: 0px;
}

.nav-bottom {
  text-align: center;
  background-color: #3c3c3c;
  border-color: #e7e7e7;
  a {
    color: #fff;
    font-size: 16px;
    height: 52px;
    line-height: 52px;
    font-weight: blod;
    padding: 0px 30px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
