// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import animate from 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Badge } from 'element-ui'
import { Button, Spinner, Header, Navbar, TabItem } from 'mint-ui'
import App from './App'
import router from './router'

//element-ui的组件导入
Vue.component(Badge.name, Badge);

//mint-ui的组件导入
Vue.component(Button.name, Button)
Vue.component(Spinner.name, Spinner)
Vue.component(Header.name, Header)
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

// Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
