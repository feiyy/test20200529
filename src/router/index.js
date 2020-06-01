import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
	path: '/',
	name: 'Default',
	redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	children:[	
		{
		  path: '/about/detail/:id',
		  name: 'Detail',		
		  component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
		}
		
	]
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//here define navigation guard
router.beforeEach((to,from,next)=>{
	
	let username = sessionStorage.getItem('username');
	
	if(to.name != 'Login' && !username)
	{
		//redirect to login
		next({name:'Login'});
	}
	else
	{
		next();
	}
	
})



export default router
