// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Spinner, Header, Navbar, TabItem } from 'mint-ui'
import App from './App'
import router from './router'

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
