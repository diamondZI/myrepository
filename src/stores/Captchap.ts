import { ref } from 'vue'
import { defineStore } from 'pinia'
import {ElMessage} from 'element-plus';
export const useCaptchapStore = defineStore('captchap', () => {
  const captchap = ref('')
  function test(value:string) {
    if (captchap.value!==value) {
      ElMessage('验证码错误')
      return false
    }else{
      return true
    }
  
    }

  return { captchap,test }
})
