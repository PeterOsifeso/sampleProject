import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/ContainerComponent/Container'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container
    }
  ]
})
