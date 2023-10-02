<template>
<div>
  <button @click="Dark()" class="absolute ">
   <el-icon v-if="dark"  ><Moon class="text-white"/></el-icon>
    <el-icon v-else ><Sunny /></el-icon>
  </button>
</div>
</template>
<script setup lang='ts'>
import { onMounted } from "vue";
import { useDark, useToggle} from "@vueuse/core";

const dark =useDark()
const toggleDark = useToggle(dark)
function Dark() {
  if (toggleDark()) {
    document.documentElement.classList.add('dark')
} else {
  
  document.documentElement.classList.remove('light')
 
}

}
onMounted(()=>{
 // On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} 
})
</script>

