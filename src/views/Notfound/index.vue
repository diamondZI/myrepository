<template>
<div class="flex justify-center flex-col absolute items-center  w-full h-full">
<div class="w-[70%] h-[50%] relative border flex flex-col
 justify-center items-center overflow-hidden
">
  
  <h1 class="text-4xl">NOT found <span class="text-red-700">404</span></h1>
  <span class="m-4">
    不好意思,您的页面不存在或者已丢失
  </span>
  <section>
    <el-button @click="Router.go(-1)"> 返回上一级left </el-button>
  <el-button @click="Router.push('/')" > 返回主页left </el-button>
  </section>
  <section class="absolute w-full -z-10 bg-red-500 md:bg-black  h-full left-[65%] hover:bg-slate-500   text-start text-5xl -rotate-[45deg] px-32 hover:text-red-700"> 
       

  </section>
  <section class="absolute -z-10 w-full bg-red-700 md:bg-black h-full right-[65%] -rotate-[45deg]"></section>
</div>
</div>
</template>
<script setup lang='ts'>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const Router=useRouter()
</script>
<style>
.a{
 transform: rotate();
}
</style>
