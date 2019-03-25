const Home = () =>
  import(/* webpackChunkName:'home' */ '@/views/Home.vue').then(
    m => m.default || m
  )
const About = () =>
  import(/* webpackChunkName:'about' */ '@/views/About.vue').then(
    m => m.default || m
  )

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'basic'
    },
    component: About
  }
  // {
  //   path: '*',
  //   component: NotFound
  // }
]
