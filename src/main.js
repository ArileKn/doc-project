import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Utils from './utils/utils.js'
import Store from './store/'

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

Vue.prototype.$util = Utils
Vue.prototype.$store = Store

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
