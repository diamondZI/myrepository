<script setup lang='ts'>
 import {$} from 'v-dollar';
 import {useRouter} from 'vue-router';
const message=$(true)
const Route =useRouter()
import {useCounterStore} from '@/stores/User';
const a=()=>{
  Route.push('/login')
  console.log("1");
}
const {User}=useCounterStore()
import {useSwitchStore} from '@/stores/Switch';
const Switch=useSwitchStore()
import Dark from '@/components/dark/index.vue';

</script>

<template>
<div class="flex p-1 justify-between w-full h-full  ">
  <div class="hidden md:flex  items-center">
    
    <img class="w-9 h-9 md:w-14 md:h-14 m-2" src="../assets/logo.svg" alt="" srcset="">  
    <h1>商品后台管理</h1>
  </div>
  <div class="flex  justify-around w-full md:w-1/3 items-center">
    <div   @click.self="Switch.Switch?Switch.openSwitch():Switch.closeSwitch()" class="flex md:hidden cursor-pointer w-8 h-8 p-2 rounded-full bg-slate-200 ">
      <el-icon  v-if="Switch.Switch" ><Expand /></el-icon>
      <el-icon   v-else ><Fold /></el-icon>
    
     </div> 
    <div @click="message=!message" class="cursor-pointer w-8 h-8 p-2 rounded-full bg-slate-200 dark:bg-[rgb(1,1,1,.0)]" >
      <el-icon  v-if="message" ><Bell class="dark:text-white" /></el-icon>
      <el-icon   v-else ><MuteNotification class="dark:text-white"  /></el-icon>
    
     </div>    
       
     <div  class="cursor-pointer dark:bg-[rgb(1,1,1,.0)] w-8 h-8 p-2 rounded-full bg-slate-200">
      <Dark/>
     </div>    
   
     <el-popconfirm
     width="220"
     confirm-button-text="yes"
     cancel-button-text="No, Thanks"
     @confirm="a()"
     icon-color="#626AEF"
     title="你要退出系统吗?"
   >
     <template #reference>
      <div class="w-32 flex cursor-pointer items-center justify-around hover:bg-white h-full">
        <img src="../assets/logo.svg" class="w-10 mx-1 bg-white p-1 rounded-full" alt="">
        <el-text >{{ User.username }}
        </el-text>
       
   </div>
     </template>
   </el-popconfirm>
     <div class="cursor-pointer w-8 h-8 p-2 rounded-full bg-slate-200 dark:bg-[rgb(1,1,1,.0)]">
      <el-icon   ><Setting class="dark:text-white" /></el-icon>
      
    
     </div> 
  </div>
</div>
</template>
