;
import type {MockMethod} from 'vite-plugin-mock';

const Router=[
  {
    icon:'',
    name:"首页",
    path:'',
    role:['admin','employee']
  },{
    icon:'',
    name:"内容管理",
    path:'',
    children:[],
    role:['admin','employee']
  },{
    icon:'',
    name:"商品管理",
    path:'',
    children:[{
      name:"仓库商品",
      path:'',
      role:['admin','employee'],
    },{
      name:"商品状态",
      path:'',
      role:['admin','employee'],
    },{
      name:"商品审核",
      path:'',
      role:['admin'],
    }
       
  ],
    role:['admin','employee']
  },{
    icon:'',
    name:"订单管理",
    path:'',
    children:[
      {
        
        name:"订单管理",
        path:'',
        role:['admin','employee']
      },
      {
     
        name:"售后维权",
        path:'',
        role:['admin','employee']
      },
      {
      
        name:"批量发货",
        path:'',
        role:['employee']
      }
    ],
    role:['admin','employee']
  },{
    icon:'',
    name:"财务管理",
    path:'',
    children:[],
    role:['admin','employee','Finance']
  },{
    icon:'',
    name:"数据报表",
    path:'',
    children:[
      {
        name:"流量报表",
        path:"",
        role:['admin']
      },{
        name:"收益报表",
        path:"",
        role:['admin']
      },,{
        name:"支出报表",
        path:"",
        role:['admin']
      }
  
    ],
    role:['admin']
  },
  ,{
    icon:'',
    name:"系统",
    path:'',
    children:[{
      name:"角色管理",
      path:"",
      role:['admin']
    },
    {
      name:"页面管理",
      path:"",
      role:['admin']
    }
   
  ],
    role:['admin']
  },
  
  

]
function name(params='employee') {

 return Router.filter(el=>el?.role.includes(params)).map(el=>{
  if (el) {
    el.children=el?.children?.filter(el=>el?.role.includes(params))
  }
 return el
 })
  
}
const a=name()
export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [a,Router]
      };
    }
  }
] as MockMethod[];
