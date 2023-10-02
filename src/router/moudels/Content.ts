export default {
  name:"内容管理",
  path:'/goods',
  component:()=>import('@/views/Goods/index.vue'),
  meta:{
    icon:'Grid',
    rank:3,
    role:['admin']
  },
  children:[{
    name:"仓库商品",
    path:'/goods/warehouse',
    component:()=>import('@/views/Goods/router/warehouse.vue'),
    meta:{
      role:['admin','employee'],
    }
  },{
    name:"商品状态",
    path:'/goods/state',
    component:()=>import('@/views/Goods/router/state.vue'),
    meta:{
      role:['admin','employee'],
    }
  },{
    name:"商品审核",
    path:'/goods/review',
    component:()=>import('@/views/Goods/router/review.vue'),
    role:['admin','employee'],
  }
     
  ],
  
} as RouterType
