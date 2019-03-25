<template>
  <div id="app">
    <Loading ref="loading" />
    <transition name="page" mode="out-in">
      <component v-if="layout" :is="layout" />
    </transition>
  </div>
</template>
<script>
import Loading from '@components/Loading.vue'
import MyFooter from '@components/public/footer.vue'
// Load layout components dynamically.
const requireContext = require.context('@/layouts', false, /.*\.vue$/)

const layouts = requireContext
  .keys()
  .map(file => [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

export default {
  name: 'App',
  data() {
    return {
      layout: null,
      defaultLayout: 'default'
    }
  },
  components: {
    Loading,
    MyFooter
  },
  methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout(layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }
      this.layout = layouts[layout]
    }
  },
  mounted() {
    this.$loading = this.$refs.loading
  }
}
</script>

<style lang="scss"></style>
