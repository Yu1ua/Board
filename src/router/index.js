import Vue from 'vue'
import Router from 'vue-router'
import PhoneBoard from '@/components/PhoneBoard'
import PadBoard from '@/components/PadBoard'
import Mesmap from '@/components/Mesmap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PhoneBoard',
      component: PhoneBoard
    },
    {
      path: '/PadBoard',
      name: 'PadBoard',
      component: PadBoard
    },
    {
      path: '/Mesmap',
      name: 'Mesmap',
      component: Mesmap
    }
  ]
})
