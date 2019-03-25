<template>
  <section>
    <div class="">
      <Child />
    </div>
    <MyFooter />
  </section>
</template>

<script>
import MyFooter from '@components/public/footer.vue'
export default {
  name: 'MainLayout',
  components: {
    MyFooter
  }
}
</script>
