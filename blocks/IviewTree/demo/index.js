import Vue from 'vue'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import Block from '../src/index'

Vue.config.productionTip = false
Vue.use(ViewUI)
new Vue({
  render: (h) => h(Block)
}).$mount('#vue-demo-layout')
