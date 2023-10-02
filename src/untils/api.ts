import  type {AxiosRequestConfig,InternalAxiosRequestConfig} from "axios";
import Axios from 'axios';
import {getCurrentInstance, h} from 'vue';
import {ElMessage} from 'element-plus';


// 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig: AxiosRequestConfig = {
  // 请求超时时间
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
 
};
Axios.create(defaultConfig)
Axios.interceptors.request.use(
   config =>{
     if (localStorage.getItem('token')) {
      config.headers.Authorization=localStorage.getItem('token')
     }
     return config
   }  ,
   err =>{
    return Promise.reject(err)
   }
)
// http response 响应拦截器
Axios.interceptors.response.use(
  response => {
  // 这里对响应的数据做了操作，大家可以自己设置响应过滤哦，下面会给出具体代码
    return response.data
  },
  error => {
  
    if(error.response.data.status === 500 && (error.response.data.message === 'token out time'||error.response.data.message==='登录失败或未登录')){
   
    }
    let err = error.response.data.message;
    if (err != '' && err != null && err != undefined) {
  
    ElMessage({
      message: h('p', null, [
        h('span', null, 'Message can be '),
        h('i', { style: 'color: teal' }, 'VNode'),
      ]),
    })
      return Promise.reject(error.response.data)
    } else {
      message: h('p', null, [
        h('span', null, 'Message can be '),
        h('i', { style: 'color: teal' }, 'HTTP：服务器遇到错误，无法完成请求'),
      ])
      
    }
  })




export default Axios
