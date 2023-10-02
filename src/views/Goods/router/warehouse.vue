<template>
<div>
  <div >
    <div  class="h-20">
       <h1>条件搜索</h1>
       <el-form class="flex m-2 md:flex-row flex-col">
        <el-form-item label="采购物品" class="mx-2">
          <el-input  placeholder="Approved by" clearable />
        </el-form-item>
       
        <el-form-item label="采购供应商" class="mx-2">
          <el-input  placeholder="Approved by" clearable />
        </el-form-item>
        <el-form-item label="状态" class="mx-2">
          <el-select
          
          placeholder="Activity zone"
          clearable
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
        </el-form-item>
        <el-form-item>
          <el-button >查询</el-button>
        </el-form-item>
       </el-form>
    </div>
    <el-table  height="600px"  v-loading="loading" :data="tableData" style="
    
    width: 100%" class="w-full  border-y border-red p-2" >
      <el-table-column fixed prop="date" label="采购时间" />
      <el-table-column prop="name" label="采购物品"  />
      <el-table-column prop="state" label="货物状态"  />
      <el-table-column prop="Number" label="采购数量"  />
      <el-table-column prop="weight" label="总重量"  />
      <el-table-column prop="client" label="供应商"  width="250" />
      <el-table-column prop="residue" label="剩余数量"  />
      <el-table-column  label="Operations" >
        <template #default>
          <el-button link type="primary" size="small" 
            >Detail</el-button
          >
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
  
    </el-table>
  </div>
</div>
</template>
<script setup lang='ts'>
import {ref,onMounted,} from 'vue'
const  loading=ref(true)
import dayjs    from 'dayjs';


interface TableData{
  date:string,
  name:string ,
  state:string,
  Number:number,
  weight:number,
  residue:number,
  client:'diamondqin有限公司'
}
const tableData=ref<TableData[]>([{
  date:dayjs('2022-12-22').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-22').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-22').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-20').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-21').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-22').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-22').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-22').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-20').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-21').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-22').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-22').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-22').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-20').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},{
  date:dayjs('2022-12-21').format('YYYY-MM-DD'),
  name:'第一' ,
  state:'健康',
  Number:100,
  weight:100,
  client:'diamondqin有限公司',
  residue:20
},])
onMounted(()=>{
  setTimeout(() => {
     loading.value=false
  }, 700);
})
</script>
<style scoped>
a{
  height: ;
}
 </style>
