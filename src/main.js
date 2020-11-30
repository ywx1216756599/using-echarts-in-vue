import Vue from 'vue'
import App from './App.vue'
import router from './router'

import echarts from 'echarts'
import Func from '@/views/theme/index'
import Xecharts from '@/views/index'
import '@/views/css/index.css'
Vue.use(Xecharts)
Func(echarts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
