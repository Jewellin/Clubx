import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Help from '@/components/Help'
import Info from '@/components-sub/Info'
import Num from '@/components-sub/Num'

//手动安装VueRouter
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/help',
      name: 'Help',
      component: Help,
      children: [
        { path: 'info', name: 'Info', component: Info },
        { path: 'num', name: 'Num', component: Num }
      ]
    }
  ]
})
