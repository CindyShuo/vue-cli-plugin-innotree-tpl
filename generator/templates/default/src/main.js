import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import 'babel-polyfill'

// 导入element
import './plugins/element.js'

// 导入插件
import plugins from './plugins'
import mixins from './plugins/mixins'

Vue.config.productionTip = false

Vue.use(plugins)
Vue.mixin(mixins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
