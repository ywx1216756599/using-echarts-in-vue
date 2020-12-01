import Vue from 'vue'
import App from './App.vue'
import router from './router'

import echarts from 'echarts'
import 'echarts-gl'
import Func from '@/views/theme/index'
import Xcharts from '@/views/index'
import '@/views/css/index.css'
Vue.use(Xcharts)
Func(echarts)

console.log(Xcharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
