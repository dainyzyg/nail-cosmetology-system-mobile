import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import socket from './modules/socket'

socket.init()
Vue.config.productionTip = false
Vue.use(MintUI)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
