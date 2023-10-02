import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSwitchStore = defineStore('Switch', () => {
  const Switch = ref(true)
  const openSwitch=()=>{
    Switch.value=false
   
  }
  const closeSwitch=()=>{
    Switch.value=true
   
  }
  

  return { Switch,openSwitch,closeSwitch }
})
