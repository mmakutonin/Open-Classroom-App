import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import RoomMobile from '../views/VideoRoomMobile.vue'
import AdminRoom from '../views/AdminRoom.vue'
import '../w3.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/rooms/mobile',
  //   name: 'room',
  //   component: RoomMobile
  // },
  {
    path: '/rooms/admin',
    name: 'admin',
    component: AdminRoom
  }
]

const router = new VueRouter({
  routes
})

export default router
