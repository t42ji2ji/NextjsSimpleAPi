import React, { Component } from 'react'
import api from './Api'



const apps = [
  '逢甲導航', 'iSensors', '晚餐吃什麼', 'FCFood逢甲美食選擇', '數字小遊戲', 'GoViral',
  'Meni', 'Prophet-List', '飲食筆記本', '路徑規劃', 'StudentLifeHelper', '危險的地方', 'GAPGame', '郵局', '找路小幫手',
  'Infinite Trip', '美食推薦', 'EasyMap', 'Travel Together', 'FoodSafety'
]

const fates = [
  '大吉', '中吉', '小吉', '吉', '半吉', '末吉', '末小吉', '凶', '小凶', '半凶', '末凶', '大凶', '沒抽中', '下次再來', '再抽一次', '不要再玩了', '大吉不是你的', '不上不下', '起起落落', '天天開心'
]

const webs = [
  'http://www.google.com', 'https://www.youtube.com/?hl=zh-TW&gl=TW', 'https://www.facebook.com/', 'https://www.gamer.com.tw/', 'http://www.iecs.fcu.edu.tw/wSite/mp?mp=370201', 'http://ilearn2.fcu.edu.tw/', 'https://ck101.com/inin/', 'https://www.facebook.com/profile.php?id=100000275280139&fref=ts', 'http://gph.is/1ga6ssR', 'https://tw.yahoo.com/', 'http://www.advocate.com/sites/advocate.com/files/2016/05/16/summer_flings.jpg'
]

const pos = [
  'https://docs.google.com/forms/d/e/1FAIpQLSf03U5F70kQpE-yIwi-C418OGVUiC7ojb_cy-9iPbYYN3VUUQ/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSfTqnYQFv5-GsfNgg0It46rA7WpLw1esqx_SoRRJngaCn03Tw/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSfm1wIw1lvodhM97OVvi1v5eHXK_6l8B_cIum4CVXezRtr6Ag/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSeYo5r1sZTKt7mQOZoQbWqKQj3Z-GCZ620O2VMeDjcOx5MLYg/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLScUrmzJQa0sNBstXq3AMqVkv0aMAXbhki0Oi3Cx2debsgxaCA/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSevpZVgeM8Gn7nZzGcx6FHv8YfxNR6YZz9MKm4T3YQ0GzXJhA/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSdR1MIKFXaQd4mZeeHsliHfCWtwaguoyLP23CghPSMXPIQRuA/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSe9tMH-8iIt4bM6rNgb31vkbTLSnbiKDtVs4hnW4oU8XrrWlA/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSfvDBzQmcoUmDGbgVa0AdiMyIfVbETp4u6Q0giqbkUh7l38zw/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSc9cGl8sGN5ILOWy-4XjNU3LzX3gcAoFnxEddYSm-zhxewu_w/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSeW-ByFHYuVChRMFs83uQ8PyIwOLAfhevawfj1zmuV3CoE9OQ/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSdyyNcfqV6e20fWYXikxCH3rc1fLhw5ZSWFC0XRDgdFK4Lj2g/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSdcVEf80LFfXPWaXapW5T6rQZR8fT_tSbel0jOr9Yf4w5wQGQ/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSd2cqIxQNv8fHMpCUHJztndb0gl_vvGmm5Pf-DWEsG7aG7SHg/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSd_LQKV-PaBuGh81CBdNok2v-EOAGlPnwYNquJeSBa20S3rAA/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSdbLh5gThYymym-NPP3XGbAr3pRGM1NvADwUPZNM0PGZB9PhQ/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLScvFsuoHm1BVCos-Ly0hM06eaNKOg0ASUBKDYxY8-KUi5xieA/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSexr7OHs6cPe_mLIEE2SV00A3aLeR0CeNoOpoBXTrsWWy-PmQ/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLScP_L87N3JSQzLh0SlaPYXY2PsS1xhdXKKaGP14_fEc9TU1WA/viewform', 'https://docs.google.com/forms/d/e/1FAIpQLSe-nKryHwyayjkeUCbgxsUq6mppfvPNQW2bIkJyCKVfKfY-8w/viewform'
]

const stylesheets = {
  innertext: {
    alignitem: 'center',
    fontSize: 50,
    textAlign: 'center'
  },
  title: {
    fontSize: 30,
  }
}



export default class Control extends Component {
  constructor(props) {
    super(props)

    this.state = {
      appname: "none"
    }

    this.random = this.random.bind(this)
  }

  componentDidMount() {
    this.random()
  }


  random() {
    var num = Math.floor(Math.random() * (19 - 0 + 1)) + 0
    var app = apps[num]

    var strUrl = location.search
    var id = ''
    var poss = ''
    if (strUrl.indexOf("?") != -1) {
      var search = strUrl.split("?");
      console.log(search[1])
      poss = apps[search[1]]
      id = pos[search[1]]
      
      console.log(id)
      console.log(poss)

      fetch(`http://140.115.197.16/?school=fcu&app=${poss}`)
        .then(
          this.setState({
            appname: num
          }))
        .then(
        setTimeout(function () { window.location = id }.bind(this), 2000)
      )
    }
}



render(){
  return (
    <div style={stylesheets.innertext}>
      {/*<p style={stylesheets.title}>恭喜抽到</p>
        <br></br>
        <p>{this.state.appname}. {apps[this.state.appname]}</p>*/}
    </div>
  )
}
}

