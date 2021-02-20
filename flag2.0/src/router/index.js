import { createRouter, createWebHashHistory } from 'vue-router'
import Frist from '../views/Frist.vue'
import Mid from '../views/Mid.vue'
import End from '../views/End.vue'

const routes = [
  {
    path: '/Frist',
    name: 'Frist',
    component: Frist
  },
  {
	  path:'/Mid',
	  name: 'Mid',
	  component: Mid
  },
  {
  	  path:'/End',
  	  name: 'End',
  	  component: End
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
