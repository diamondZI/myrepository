<script setup lang='ts'>
 import Aside from '@/components/Aside.vue'
 import Header from '@/components/Header.vue'
 import {useSwitchStore} from '@/stores/Switch';
 const Switch=useSwitchStore()
</script>
<template>
  
    <div class="common-layout   ">
      <el-container>
        <el-header class="h-[62px] bg-gray-100 dark:bg-black dark:text-gray-600">
          <Header/>
        </el-header>
        <el-container>
          <el-aside width="auto" :class="[{'hidden':Switch.Switch,' absolute  z-10':!Switch.Switch},'md:block md:relative min-h-[calc(100%-60px)] p-0 m-0' ]">   
<Aside class="dark:bg-black"/>
          </el-aside>
          <el-main class=" overflow-y-auto dark:bg-black">
           <RouterView />
           
          </el-main>
        </el-container>
      </el-container>
    </div>

</template>
