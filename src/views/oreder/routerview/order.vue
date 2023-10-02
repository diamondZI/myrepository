<template>
<div class="flex flex-col gap-3">
  <el-card class="h-54 ">
   <template #default> 
    <el-form :model="formdata">
        <section class="flex justify-start overflow-auto gap-3 ">
          <el-form-item label="订单搜索">
            <el-input class="w-32"  v-model="formdata.id"   placeholder="please select your zone">
            </el-input>
          </el-form-item>
          <el-form-item  label="售后状态">
            <el-select class="w-32" v-model="formdata.state"  placeholder="please select your zone">
              <el-option label="完成" value="完成" />
              <el-option label="未付款" value="未付款" />
              <el-option label="待收货 " value="待收货 " />
              <el-option label="待退款" value="待退款" />
             
            </el-select>
          </el-form-item>
          <el-form-item  label="推广渠道">
            <el-select class="w-32" v-model="formdata.Promotion_channels" placeholder="please select your zone">
              <el-option label="微信" value="微信" />
              <el-option label="淘宝" value="淘宝" />
              <el-option label="B站" value="B站" />
              <el-option label="抖音" value="抖音" />
              <el-option label="拼多多" value="拼多多" />
            
            </el-select>
          </el-form-item>
        </section>
        <section>
          <el-form-item label="下单时间" >
           <el-col :span="12">
            <el-date-picker
                v-model="formdata.time"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          />
           </el-col>
          </el-form-item>
        </section>
        <section>
          <el-form-item label="付款方式" >
           <el-col :span="12">
            <el-select v-model="formdata.PaymentOd"  placeholder="选择方式">
              <el-option label="微信支付" value="微信支付" />
              <el-option label="花呗支付" value="花呗支付" />
              <el-option label="银联支付" value="银联支付" />
              <el-option label="支付宝支付" value="支付宝支付" />
            </el-select>
           </el-col>
          </el-form-item>
        </section>
        <section>
          <el-button @click="handleSou()">搜索</el-button>
          <el-button @click="resetting()">重置</el-button>
        </section>
    </el-form>
   </template>
  </el-card>
  <el-card class="h-[26rem]">
   
      <ul class="flex">
        <li v-for="(i,index) in state " @click="onstateod(i)" :key="index" class=" p-2 text-center h-10  bg-background mx-[1px] hover:bg-white hover:text-system cursor-pointer    ">
         {{ i }}
        </li>
      </ul>
      <el-table :data="filterdata" v-loading="!filterdata.length"  ref="multipleTableRef" class="h-60"  height="300" style="width: 100%">
        <el-table-column  prop="id" label="选择" width="50" type="selection" />
        <el-table-column  prop="id" label="订单号" width="150" />
        <el-table-column  prop="goodsname" label="商品名" width="150" />
        <el-table-column  prop="number" label="数量" width="100" />
        <el-table-column  prop="Value" label="支付价格" width="100" />
        <el-table-column  prop="username" label="用户名" width="150" />
        <el-table-column  prop="phone" label="用户手机号" width="150" />
        <el-table-column  prop="PaymentOd" label="付款方式" width="150" />
        <el-table-column  prop="state" label="订单状态" width="150" />
        <el-table-column  prop="time" label="订单时间" width="150" />
        <el-table-column  prop="Promotion_channels" label="推广渠道" width="150" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="scope">
            <el-button  link type="primary" size="small" @click="handleClick(scope.$index)"
              >Detail</el-button
            >
            <el-button link type="primary" size="small" @click="handleClicEdit(scope.$index)">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      small
      background
      layout="prev, pager, next"
      :total="20"
      :page-size="4"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      class="mt-4"
    />
  </el-card>

<el-drawer v-model="drawer" direction="rtl">
  <template #header>
    <h4>修改这条数据</h4>
  </template>
  <template #default>
    <el-form :mode="Editdata">
      <el-form-item label="订单号码">
        <el-input v-model="Editdata.id"/>
      </el-form-item>
      <el-form-item label="支付方式">
        <el-select v-model="Editdata.PaymentOd"  placeholder="选择方式">
          <el-option label="微信支付" value="微信支付" />
          <el-option label="花呗支付" value="花呗支付" />
          <el-option label="银联支付" value="银联支付" />
          <el-option label="支付宝支付" value="支付宝支付" />
        </el-select>
      </el-form-item>
      <el-form-item label="推广渠道">
        <el-select class="w-32" v-model="Editdata.Promotion_channels" placeholder="please select your zone">
          <el-option label="微信" value="微信" />
          <el-option label="淘宝" value="淘宝" />
          <el-option label="B站" value="B站" />
          <el-option label="抖音" value="抖音" />
          <el-option label="拼多多" value="拼多多" />
        
        </el-select>
      </el-form-item>
      <el-form-item label="购买数量">
        <el-input v-model="Editdata.number"/>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="Editdata.goodsname"/>
      </el-form-item>
    </el-form>
  </template>
  <template #footer>
    <div style="flex: auto">
      <el-button @click="cancelClick">cancel</el-button>
      <el-button type="primary" @click="confirmClick">confirm</el-button>
    </div>
  </template>
</el-drawer>
</div>
</template>
<script setup lang='ts'>
import Axios from '@/untils/api';
import {ref,computed, reactive} from 'vue'
type statetype='完成'|'未付款'|'待退款'|'待收货'|null
type PaymentOd='微信支付'|'支付宝支付'|'花呗支付'|'银联支付'|null // 可修改
type Promotion_channels='微信'|'抖音'|'b站'|'淘宝'|'拼多多'|null
interface data{
   id:string,
   PaymentOd:PaymentOd,
   Promotion_channels:Promotion_channels
   time:Date|null,
   state:statetype
}
interface datatable extends data{
   Value:number,
   phone:string,
   bol:boolean,
   goodsname:string,
   username:string,
   number:number,
}
const state=['全部','完成','待付款','待收货','待退货']
const drawer=ref(false)
const formdata=ref<data>(
  {
  id:'1',
  PaymentOd:'支付宝支付',
  Promotion_channels:'微信',
  time:new Date('2022-12-22'),
  state:'待收货'
}
)
let Editdata=ref<datatable>({
  id:'1',
  number:110,
  PaymentOd:'微信支付',
  phone:'212121',
  Promotion_channels:'微信',
  time:new Date('2022-12-22'),
  bol:false,
  goodsname:"超级 阳光 号",
  Value:100,
  state:'待收货',
  username:'diamondqin',

})
const tableData=reactive<datatable[]>([{
  id:'1',
  time:new Date('2022-12-22'),
  phone:'1212212121',
  bol:false,
  goodsname:"超级 阳光 号",
  number:100,
  Value:100,
  PaymentOd:"微信支付",
  state:'待收货',
  Promotion_channels:'微信',
  username:'diamondqin'
},
{
  id:'1',
  time:new Date('2022-12-22'),
  phone:'1212212121',
  bol:false,
  goodsname:"超级 阳光 号",
  number:100,
  Value:100,
  PaymentOd:"微信支付",
  state:'待收货',
  Promotion_channels:'微信',
  username:'diamondqin'
} 
,{
  id:'1',
  time:new Date('2022-12-22'),
  phone:'1212212121',
  bol:false,
  goodsname:"超级 阳光 号",
  number:100,
  Value:100,
  PaymentOd:"微信支付",
  state:'完成',
  Promotion_channels:'微信',
  username:'diamondqin'
},{
  id:'111',
  time:new Date('2022-12-22'),
  phone:'1212212121',
  bol:false,
  goodsname:"超级 阳光 号",
  number:100,
  Value:100,
  PaymentOd:"微信支付",
  state:'完成',
  Promotion_channels:'微信',
  username:'diamondqin'
}])
const stateod=ref<statetype|string>('全部')
const SOU=ref(true)
const onstateod=(name:statetype|string)=>{
  SOU.value=true
  stateod.value=name
}
const pagesize=reactive({
  start:0,
  end:3,
})
const filterdata=computed(()=>{
  const tableData1=tableData.slice(pagesize.start,pagesize.end+1)
 if (SOU.value) {
  return tableData1.filter(el=>el.state===stateod.value||stateod.value==='全部')
 }else{
  return tableData1.filter(el=>{
   return el.state===formdata.value.state&&el.PaymentOd===formdata.value.PaymentOd&&
    el.Promotion_channels===formdata.value.Promotion_channels&&el.id===formdata.value.id
  })
 }
})
const handleClick=(num:number)=>{
  tableData.splice(num,1)
}
const handleSou=()=>{
 SOU.value=false
}

const resetting=()=>{
 SOU.value=true
 for (const key in formdata.value) {
  if (Object.hasOwnProperty.call(formdata.value, key)) {
    formdata.value.id=''
    formdata.value.PaymentOd=null
    formdata.value.Promotion_channels=null
    formdata.value.state=null
    formdata.value.time=null
  }
   
 }

}
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const pagesizeval=ref<number>(1)
const Num=ref()


const handleCurrentChange = async (val: number) => {
 pagesizeval.value=val
  if (!tableData[val*4]) {
    const A= await Axios.get('/api/data').then(res=>
    res.data.forEach((element:datatable) => {
        tableData.push(element)
    })
  ).then(res=>{
     pagesize.start=(val-1)*4
     pagesize.end=pagesize.start+4
  }
  )
  } else{
    pagesize.start=(val-1)*4
     pagesize.end=pagesize.start+3
  }
  

}
function hasOwnProperty<T, K extends PropertyKey>(
    obj: T,
    prop: K
): obj is T & Record<K, unknown> {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

const  handleClicEdit=(num:number)=>{
  drawer.value=true
  Num.value=num
  console.log(tableData[0].id);
   const t=tableData[Num.value+4*(pagesizeval.value-1)]
  // let iterator:string;
  for ( const key in Editdata) {
    if (hasOwnProperty(Editdata.value,key) && hasOwnProperty(t,key)) {
      Editdata.value[key]=t[key]
    }
  
 
   }
  
}
const cancelClick=()=>{
 drawer.value=false
}
const confirmClick=()=>{
  tableData[Num.value+4*(pagesizeval.value-1)]=Editdata.value
  console.log('修改成功');
  drawer.value=false
}
</script>
/ 0 1 2 3 
/ 0 1 2 3 
/ 4 5 6 7

/ 1*0 1*1 1*2 1*3
/ 0+4*1 1+4*1   2*2 2*3
