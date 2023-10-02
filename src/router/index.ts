import { createRouter, createWebHistory}  from 'vue-router'
import  type {Router,RouteRecordRaw }  from 'vue-router'
import HomeView from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
import We from '../views/home/wecomle/index.vue';
import Notfound from '@/views/Notfound/index.vue';
import {useCounterStore} from '@/stores/User';

import {ElMessage} from 'element-plus';


const router:Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path:'/',
          name:'wecomle',
          component:We
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
     path:'/404',
     name:"404",
     component:Notfound,
     meta:{
      title:"无法找到"
     }

    },
    {
      path:'/:pathMatch(.*)',
      redirect:'/404'
    }
   
  ]
})

export  const addRouters:RouterType[]=[]
const modules:Record<string, any> =import.meta.glob('./moudels/*.ts',{
  eager:true
})
// 有了token就可以向服务器发起请求,获取登录用户
router.beforeEach((to,from,next)=>{
  console.log(useCounterStore().User.username);
  
  if (to.path!='/login'&&!useCounterStore().User.username) {
    ElMessage.error("请重新登录")      
    next('/login')
  }else{
   next()
  }
  //  if (to.) {
    
  //  }
    
  //  router.push('/login')
 
})
Object.keys(modules).forEach(key => {
  // 根据登录角色控制权限  
  if (modules[key].default.meta?.role.includes(sessionStorage.getItem('username'))) {
     
      addRouters.push(modules[key].default)
  }

  return
  // 根据用户角色来控制权限
  // const role=sessionStorage.getItem('role') as string[]|null
  // const bol= role?.map(el=>{
  //    if (modules[key].default.meta?.role.includes(el)) {
  //     return true
  //    }
  // })
  // if (bol) {
  //   addRouters.push(modules[key].default)
  // }
    
});
addRouters.forEach((key:any)=>{
  router.addRoute('home',key)
})

export default router
