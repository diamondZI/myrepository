<template>
<div  ref="main" class="w-full h-full">
 
  </div>
  </template>
  <script setup lang='ts'>
import {onMounted, ref, watchEffect} from 'vue'
import * as echarts from 'echarts';

const A=defineProps(
 {width:{
   type:Number,
   default:100
 },
 height:{
   type:Number,
   default:100
 }
}
)
const option = {
    
    title: {
        text: '销售额趋势'
    },
    
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['销售额', '毛利率', ]
    },
    toolbox: {
        feature: {
            saveAsImage: {
              
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['9/16', '9/17', '9/18', '9/19', '9/20', '9/21']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '销售额',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 234, 200, 170, 120]
        },
        {
            name: '毛利率',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [20, 82, 91, 134, 90, 30, 10]
        },
       
    ]
};
const main=ref()
 

onMounted(()=>{
  const myChart = echarts.init(main.value,{
    renderer: 'svg'
  });

  myChart.setOption(option) 
  window.addEventListener('resize', function() {
    myChart.resize();
  });
})

</script>
