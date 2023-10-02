<template>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo m-0 p-0 h-full "
      :collapse="Switch.Switch"
      ref="Menu"
    >
    <el-menu-item index="2"  @click="Router.push('/')">
      <el-icon><house /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu v-for="(item,index) in addRouters" :index="index.toString()" :key="index">
      <template #title>
        <el-icon>
          <component :is="item.meta?.icon"></component>
        </el-icon>
        <span>{{item.name}}</span>
      </template>
      <el-menu-item-group @click="Router.push(item2.path)" v-for="(item2,index) in item.children" :key="index" >
        <el-menu-item #title v-if="item2.meta?.role.includes('admin')">
         <span>{{item2.name}}</span>
        </el-menu-item>
        
      </el-menu-item-group>
    </el-sub-menu>
    
    <span class="w-full relative right-0">
      <el-icon :color="'red'"  v-if="!Switch.Switch" @click="Switch.closeSwitch()"><DArrowLeft /></el-icon>
      <el-icon v-else @click="Switch.openSwitch()"><DArrowRight /></el-icon>
    </span>
    </el-menu>
  

</template>
<script setup lang='ts'>
import {ref} from 'vue'
import {addRouters} from '@/router/index'
import house from '@/components/icons/Iconhouse.vue';
import {useRouter} from 'vue-router';
import {useSwitchStore} from '@/stores/Switch';
import {onClickOutside} from '@vueuse/core';
const Switch=useSwitchStore()

const Router=useRouter()
const Menu =ref<HTMLElement|undefined>()
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
onClickOutside(Menu,()=>{
  if (!Switch.Switch&&document.body.clientWidth<767) {
    Switch.closeSwitch()
  
  }
})

</script>
