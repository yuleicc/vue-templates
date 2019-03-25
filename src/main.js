import Vue from 'vue'
import http from './services/http'
import { Message } from 'element-ui'

import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/message.css'
import App from './App.vue'

import './bootstrap'
import store from './store'
import router from './router'

import '@components/common'

Vue.config.productionTip = false

Vue.prototype.$message = Message
Vue.prototype.$http = http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted() {
    window.vue = this
  },
  ...App
})
