export default {
  name:"订单管理",
  path:'/order',
  component:()=>import('@/views/oreder/index.vue'),
  meta:{
    icon:'Tickets',
    role:['admin'],
    rank:6
  },
  children:[{
    name:"订单管理",
    path:"/order/order",
    component:()=>import('@/views/oreder/routerview/order.vue'),
    meta:{
      icon:'',
      role:['admin']
    }
  },
  {
    name:"售后维权",
    path:"/order/Aftermarket",
    component:()=>import('@/views/oreder/routerview/Aftermarket.vue'),
    meta:{
      icon:'',
      role:['admin']
    }
  },
  {
    name:"批量发货",
    path:"/order/bulktransfer",
    component:()=>import('@/views/oreder/routerview/bulktransfer.vue'),
    meta:{
      icon:'',
      role:['admin']
    }
  }
 
  ],
  
} as RouterType
