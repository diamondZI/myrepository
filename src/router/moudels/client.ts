export default {
  name:"客户管理",
  path:'/client',
  component:()=>import('@/views/client/index.vue'),
  meta:{
    icon:'User',
    rank:3,
    role:['admin']
  },
  children:[{
    name:"客户管理",
    path:'/goods/warehouse',
    component:()=>import('@/views/Goods/router/warehouse.vue'),
    meta:{
      role:['admin',],
    }
  },{
    name:"客户权限",
    path:'/goods/state',
    component:()=>import('@/views/Goods/router/state.vue'),
    meta:{
      role:['admin'],
    }
  }
     
  ],
  
} as RouterType
