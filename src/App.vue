<script setup lang="ts">

 import {onMounted, ref} from 'vue'
 import {ElConfigProvider} from 'element-plus';
import { zhCn } from 'element-plus/es/locale/index.mjs';

</script>

<template>
  
  <ElConfigProvider>
    <RouterView />
  </ElConfigProvider>
   
 
</template>
