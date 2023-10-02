export default {
      name:"系统",
      path:'/system',
      component:()=>import('@/views/system/index.vue'),
      meta:{
        icon:'Setting',
        role:['admin'],
        rank:6
      },
      children:[{
        name:"角色管理",
        path:"/system/role",
        component:()=>import('@/views/system/routeriew/role.vue'),
        meta:{
          icon:'',
          role:['admin']
        }
      },
      {
        name:"页面管理",
        path:"/system/page",
        component:()=>import('@/views/system/routeriew/page.vue'),
        meta:{
          icon:'',
          role:['admin']
        }
      }
     
      ],
      
} as RouterType
