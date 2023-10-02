;
import HomeView from '@/views/home/index.vue';
import LoginView from '@/views/login/index.vue';
export const router:RouterType[]=[
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]
// 
// {
//   icon:'',
//   name:"内容管理",
//   path:'',
//   children:[],
//   role:['admin','employee']
// },{
//   icon:'',
//   name:"商品管理",
//   path:'',
//   children:[{
//     name:"仓库商品",
//     path:'',
//     role:['admin','employee'],
//   },{
//     name:"商品状态",
//     path:'',
//     role:['admin','employee'],
//   },{
//     name:"商品审核",
//     path:'',
//     role:['admin','employee'],
//   }
     
// ],
//   role:['admin','employee']
// },{
//   icon:'',
//   name:"订单管理",
//   path:'',
//   children:[
//     {
      
//       name:"订单管理",
//       path:'',
//       role:['admin','employee']
//     },
//     {
   
//       name:"售后维权",
//       path:'',
//       role:['admin','employee']
//     },
//     {
    
//       name:"批量发货",
//       path:'',
//       role:['employee']
//     }
//   ],
//   role:['admin','employee']
// },{
//   icon:'',
//   name:"财务管理",
//   path:'',
//   children:[],
//   role:['admin','employee','Finance']
// },{
//   icon:'',
//   name:"数据报表",
//   path:'',
//   children:[
//     {
//       name:"流量报表",
//       path:"",
//       role:['admin']
//     },{
//       name:"收益报表",
//       path:"",
//       role:['admin']
//     },,{
//       name:"支出报表",
//       path:"",
//       role:['admin']
//     }

//   ],
//   role:['admin']
// },
// ,{
//   icon:'',
//   name:"系统",
//   path:'',
//   children:[{
//     name:"角色管理",
//     path:"",
//     role:['admin']
//   },
//   {
//     name:"页面管理",
//     path:"",
//     role:['admin']
//   }
 
// ],
//   role:['admin']
// },


//
