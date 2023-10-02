<script setup lang='ts'>
import {reactive,ref} from "vue"
import Light from "@/assets/svg/Light.svg";
import logo from "@/assets/logo.svg";
import { User as U ,Lock} from "@element-plus/icons-vue";
import Dark from "@/components/dark/index.vue";
import {useCounterStore} from '@/stores/User';
import Captcha from "@/components/Captcha.vue";
import {useCaptchapStore} from '@/stores/Captchap';
import {useRouter} from 'vue-router';

const User =reactive({
  username:'',
  password:'',
  Captcha:'',
})
const R=useCaptchapStore()
const repassword=ref(true)
const {login}=useCounterStore()
const Router=  useRouter()
const formLabel=  ()=>{
  if (R.test(User.Captcha)) {
   
 login(User)
  Router.push('/')
  
   
   
  
  }
}


</script>
<template>
<div class="w-full  flex justify-between h-full bg-white dark:bg-black absolute">

 <Dark/>
  <div class="hidden md:flex items-end  justify-end ">
     
      <img class="w-1/2 h-full relative" :src="Light" alt="" srcset="">
    
 </div>
 <div class=" lg:w-[60%] md:w-[80%] w-full flex-col items-center  flex justify-center relative ">
   <img class="w-1/6 m-10" :src="logo" alt="" srcset="">
   <h1 class="text-3xl text-cyan-500 flex m-3">
    <p class="animate-[bounce_800ms_ease-in-out_infinite] text-cyan-300">商家</p>
    <p class="animate-[bounce_900ms_ease-in-out_infinite] text-cyan-400">后台</p>
    <p class="animate-[bounce_1000ms_ease-in-out_infinite]  text-cyan-400">管理</p>
    <p class="animate-[bounce_1100ms_ease-in-out_infinite]  text-cyan-300">系统</p>
   </h1>
  
  <el-form 
  
  class="flex flex-col  items-center"
    :model="User"
    
  >
   
  <el-input
      v-model="User.username"
      class=" m-1 p-2"
      size="large"
      placeholder="Please Input Username"
      :prefix-icon="U"
    />
    <el-input
    type="password"
    v-model="User.password"
    class=" m-1 p-2"
    size="large"
    :prefix-icon="Lock"
    placeholder="Please Input Password"
  />
   
  <div class="flex items-center">
    <el-input v-model="User.Captcha" class="m-1  p-2 h-16" placeholder="验证码"></el-input>
    <Captcha  > 
    </Captcha>
    
  </div>
    <div class="flex justify-between items-center w-full p-2">
    
      <el-checkbox v-model="repassword">
          记住密码
      </el-checkbox>
      <span>忘记密码 </span>
     
    </div>
    <el-button @click="formLabel()" class=" w-[calc(100%-2rem)] m-2 ">
      登录
    </el-button>
    <div>
      <el-button class=" w-50 "  type="primary" plain>
        <RouterLink to="/">二维码登录</RouterLink>
      </el-button>
      <el-button class=" w-50 "  type="primary" plain>
        <RouterLink to="/">注册</RouterLink>
      </el-button>
    </div>
     

  </el-form>
 </div>
</div>
</template>
