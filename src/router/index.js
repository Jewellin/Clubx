import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/Home'
import ClubInfo from '@/components/tabbar/ClubInfo'
import ClubActi from '@/components/tabbar/ClubActi'
import Setting from '@/components/tabbar/Setting'

//手动安装VueRouter
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/clubInfo',      
      component: ClubInfo
    },
    {
      path: '/clubActi',    
      component: ClubActi
    },
    {
      path: '/setting',      
      component: Setting
    }
  ]
})
