import * as echarts  from 'echarts'

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
const  option2 = {
  title:{
    text:"日活趋势"
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }
  ]
};
const option3 = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '淘宝' },
        { value: 735, name: '拼多多' },
        { value: 580, name: '快手' },
        { value: 484, name: '抖音' },
      ]
    }
  ]
};
function initChart(main:HTMLElement,options:{}) {
  var myChart = echarts.init(main,null,{
    renderer: 'svg'
  });
  myChart.setOption(options);
  window.addEventListener('resize', function() {
    myChart.resize();
  });

}

export {initChart,option,option2,option3}
