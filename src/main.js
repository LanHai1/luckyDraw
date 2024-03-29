import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "../src/assets/css/base.css"
import "../src/assets/css/twistedEggMachine.css"

import animated from 'animate.css' 


Vue.use(animated)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
