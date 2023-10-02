<script setup lang='ts'>
import {onMounted, ref} from 'vue'
import Goods from "@/components/icons/Iconoredrofgoods.vue";
import Map from '@/components/map.vue';
import { initChart,option2,option3 } from "@/components/eacher";


import vDirective from '@/api/Vnode'



const limain = ref()
const limain2 = ref()

const today=[{
  title:'今日销售额',
  number:86540,
  up:13.57,
  // icon:ic:baseline-attach-money
},{
  title:'今日浏览量',
  number:86540,
  up:13.57,
  // icon:ic:baseline-attach-money
},{
  title:'今日销售额',
  number:86540,
  up:-13.57,
  // icon:ic:baseline-attach-money
},
{
  title:'今日销售额',
  number:86540,
  up:13.57,
  // icon:IcBaselineAttachMoney
}
]
const list=[{
  name:'订单查询',
  path:'',
  icon:Goods
},{
  name:'商品管理',
  path:'',
  icon:Goods
},{
  name:'客户管理',
  path:'',
  icon:Goods
},{
  name:'发货管理',
  path:'',
  icon:Goods
},{
  name:'热度管理',
  path:'',
  icon:Goods
},
{
  name:'退款维权',
  path:'',
  icon:Goods
},
]


onMounted(()=>{
 
 initChart(limain.value,option2)
 initChart(limain2.value,option3)
  
})
</script>
<template>


  <!-- <div class=" relative text-sm  bg-slate-100 p-1 w-full grid-flow-row gap-2 
  grid grid-cols-4 md:grid-rows-6  grid-rows-[repeat(10,8rem)]  ">
    <div class="max-h-[8rem]  col-span-4 lg:col-span-1 row-span-1 bg-white p-1 md:p-4" v-for="(item,index) in today" :key="index">
      <section class="h-full md:flex-nowrap flex flex-col justify-between">
       <h1 class="font-bold">{{item.title}}</h1>
       <div>

         <p class="text-3xl">{{ item.number.toFixed(2)}}</p>
         <div class="text-sm flex">自上周以来 <p :class="['mx-1',{'text-yellow-300':item.up<0},{'text-green-600':item.up>=0}]">{{ item.up+'%' }}</p> </div>
       </div>    
       </section>
    </div>
     <div class="bg-white  col-span-4 md:col-span-3 row-span-2 md:row-span-3 " ref="main">
   
      <Map />
    </div>
     <div class="bg-white   col-span-2 md:col-span-1  md:row-span-2 row-span-1 p-2">
      <span class="flex justify-between  ">
        <p class="font-bold">常用功能</p>
        
          <el-icon class="cursor-pointer"><ArrowRight /></el-icon>
        
      </span>
      <ul class="flex h-full flex-wrap  justify-center  items-center overflow-hidden ">
       <li class=" flex  m-2 justify-center  flex-col items-center   hover:text-system" v-for="(item,index) in list" :key="index">
     <component class=" bg-slate-200 text-lg md:text-4xl cursor-pointer rounded-md" :is="item.icon"></component>
      <span class="font-thin">{{item.name}}</span>
      </li>
      </ul>
     </div>
     <div class="bg-white  col-span-2 md:col-span-1 md:row-span-3 row-span-1 p-3">
      <span class="flex justify-between mb-10">
        <p class="font-bold">公告通知</p>
          <el-icon class="cursor-pointer"><ArrowRight /></el-icon>
      </span>
     </div>
     <div class="  md:col-span-3  col-span-4 row-span-3 flex justify-between flex-col md:flex-row  gap-3">
      <div class=" flex-1  bg-white" ref="limain">1</div>
      <div class=" flex-1 bg-white" ref="limain2">2</div>
     </div>
  </div> -->
   
  <el-row :gutter="24" class="" >
     <el-col
       :ms="24"
      :sm="12"
      :lg="6"
      v-for="item in today"
    
      >
      <el-card v-directive  class="@container dark:bg-black dark:text-white  w-full mb-2 p-0  h-[8rem] ">
      <div class="flex justify-between">
        <section class="h-full md:flex-nowrap flex flex-col justify-between">
          <h1 class="font-bold">{{item.title}}</h1>
          <div>
   
            <p class="text-3xl">{{ item.number.toFixed(2)}}</p>
            <div class="text-sm flex">自上周以来 <p :class="['mx-1',{'text-yellow-300':item.up<0},{'text-green-600':item.up>=0}]">{{ item.up+'%' }}</p> </div>
          </div>    
        </section>
        <div class="@lg:flex hidden">
          <section class="h-full md:flex-nowrap flex flex-col justify-between">
            <h1 class="font-bold">{{item.title}}</h1>
            <div>
     
              <p class="text-3xl">{{ item.number.toFixed(2)}}</p>
              <div class="text-sm flex">自上周以来 <p :class="['mx-1',{'text-yellow-300':item.up<0},{'text-green-600':item.up>=0}]">{{ item.up+'%' }}</p> </div>
            </div>    
          </section>
        </div>
        <div class="text-[red]">
          你
        </div>
      </div>
       
      </el-card> 
     
     
    </el-col>
    <el-col
     :md="18"
    
    >
 <div  class="w-[96%] h-[300px]  "  >
  <Map  />
 </div>
    </el-col>
    <el-col
   :md="6"
    
    >
 <el-card  v-directive class="dark:bg-black   w-full h-[200px] overflow-hidden p-0 m-1">
   <template #header>
    <span class="flex justify-between dark:text-white ">
      <p class="font-bold">常用功能</p>

        <el-icon class="cursor-pointer"><ArrowRight /></el-icon>
      
    </span>
   </template>
   <template #default>
    <ul class="flex  h-full flex-wrap  justify-center  items-center  ">
      <li class=" flex  my-1 mx-[1px] justify-center  flex-col items-center   hover:text-system" v-for="(item,index) in list" :key="index">
    <component class="text-xl bg-slate-200  cursor-pointer rounded-md" :is="item.icon"></component>
     <span class="font-thin dark:text-white ">{{item.name}}</span>
     </li>
     </ul>
   </template>
 </el-card>
    </el-col>
  
   <el-col
   :md="9"
   
   >
    <el-card  v-directive shadow="hover"   class=" dark:bg-black w-full  md:h-[270px] h-[200px] m-1">
      <template #default>
        <div  class="w-full    md:h-[270px] h-[200px] relative" ref="limain"></div>
      </template>
    </el-card>
   </el-col>
   <el-col
   :md="9"
   

   >
    <el-card shadow="hover" class="w-full md:h-[270px] h-[200px] m-1 dark:bg-black">
      <template #default>
        
          <div class="w-full md:h-[270px] h-[200px] relative" ref="limain2"></div>
        
      </template>
    </el-card>
   </el-col>
  
   <el-col
   :md="6"
  
   
    >
 <el-card class="lg:-mt-[90px] dark:bg-black dark:text-white m-1  w-full md:h-[360px] h-[200px]  ">
   <template #header>
    <span class="flex justify-between  ">
      <p class="font-bold">常用功能</p>
      
        <el-icon class="cursor-pointer"><ArrowRight /></el-icon>
      
    </span>
   </template>
 </el-card>
    </el-col>
 
  
  </el-row>
  

</template>
