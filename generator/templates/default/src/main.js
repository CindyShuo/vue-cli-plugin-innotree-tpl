import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'babel-polyfill'
<%_ if (!options.vuex) { _%>
import store from './store'
<%_ } _%>

<%_ if (!options.elementUI) { _%>
// 导入element
import './element.js'
<%_ } _%>

// 导入插件
import plugins from './plugins'
import mixins from './plugins/mixins'

Vue.config.productionTip = false

Vue.use(plugins)
Vue.mixin(mixins)

new Vue({
  router,
  <%_ if (!options.vuex) { _%>
  store,
  <%_ } _%>
  render: h => h(App)
}).$mount('#app')
