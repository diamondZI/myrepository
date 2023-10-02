import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Axios from '@/untils/api';

// 登录 
// 登出
// 自动登出
export const useCounterStore = defineStore('User', () => {
  const User={
    username:sessionStorage.getItem('username')||'',
    roles:sessionStorage.getItem('roles')||[]
    ,
  }
  const SET_USENAME=(username:string) =>{
    User.username=username
  }
  const SET_ROLES=(roles:[]) =>{
    User.roles=roles
  }
  async function login(User:{username:string,password:string,Captcha:string}){
    if (User) {
      const {data} =await Axios.post('/api/login',{
        username:User.username,
        password:User.password
      }).then(res=>res)
    console.log(data);
    sessionStorage.setItem('username',data.username) 
    sessionStorage.setItem('roles',data.roles) 
    SET_USENAME(data.username)
    SET_ROLES(data.roles)
    }
  }

  return { User,login }
})
