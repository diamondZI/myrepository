import type {Directive} from 'vue';

import { h,render,createVNode } from 'vue';

function name(el:HTMLElement) {
  const dom=document.createElement('div')
  const a= el.cloneNode(true)
  console.log(a);
  dom.className='Vnode'
   dom.appendChild(a)
   document.body.appendChild(dom)
  const V=h('div')
  setTimeout(() => {
    document.body.removeChild(dom)
  }, 1000);
 render(V,dom) 
}
const VDirective = {
  
  created(el:HTMLElement ) {
   
    el.onclick=()=>{
      console.log(name(el));

    }
    
  },
 
}
export default  VDirective
