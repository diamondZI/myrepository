export default [
  {
      url: "/api/data",
      method: "get",
      response: () => {
          return {
              code: 0,
              message: "ok",
              data: [{
                id:'1',
                time:new Date('2022-12-22'),
                phone:'1212212121',
                bol:false,
                goodsname:"霓虹啊",
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
              }]
          }
      }
  }
]
