import Vue from 'vue'
import ToDo from './ToDo'

Vue.config.productionTip = false

new Vue({
  render: h => h(ToDo),
}).$mount('#app')
