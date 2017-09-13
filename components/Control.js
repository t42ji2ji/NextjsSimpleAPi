import React, { Component } from 'react'
import api from './Api'



const apps = [
   '逢甲導航', 'iSensors', '晚餐吃什麼', 'FCFood逢甲美食選擇', '數字小遊戲', 'GoViral',
  'Meni', 'Prophet-List', '飲食筆記本', '路徑規劃', 'StudentLifeHelper', '危險的地方', 'GAPGame', '郵局','找路小幫手',
  'Infinite Trip','美食推薦','EasyMap','Travel Together','FoodSafety'
]

const fates = [
  '大吉','中吉','小吉','吉','半吉','末吉','末小吉','凶','小凶','半凶','末凶','大凶','沒抽中','下次再來','再抽一次','不要再玩了','大吉不是你的','不上不下','起起落落','天天開心'
]

const webs = [
  'http://www.google.com','https://www.youtube.com/?hl=zh-TW&gl=TW','https://www.facebook.com/','https://www.gamer.com.tw/','http://www.iecs.fcu.edu.tw/wSite/mp?mp=370201','http://ilearn2.fcu.edu.tw/','https://ck101.com/inin/','https://www.facebook.com/profile.php?id=100000275280139&fref=ts','http://gph.is/1ga6ssR','https://tw.yahoo.com/','http://www.advocate.com/sites/advocate.com/files/2016/05/16/summer_flings.jpg'
]

const questionnaires = [
  "https://goo.gl/forms/WU9kelhlHx1IB1922", "https://goo.gl/forms/SMfnSDPUJHUDsMQL2", "https://goo.gl/forms/eeSx594HrOkCNlW23", "https://goo.gl/forms/ShddL6eSqxeWmn3J2", "https://goo.gl/forms/YCFsY6zTqujyXVht1", "https://goo.gl/forms/SjVEMK3WJezWinJr1", "https://goo.gl/forms/5mjSfjrb9EB6CTxo1", "https://goo.gl/forms/2KJyZ3Dt0Di22H0H3", "https://goo.gl/forms/42n1DlEwPip2RtRu2","https://goo.gl/forms/dcdBIyN9XdWXZqCn2", "https://goo.gl/forms/sOe5Ks9Yz63t7OXl2", "https://goo.gl/forms/Lb11UyVklZO8Wv8I3","https://goo.gl/forms/lqRldsCEdmp4UgvM2", "https://goo.gl/forms/otIPrEtRZrx4gUas1"
]

const youtube = [
  "https://youtu.be/rYRZ9SPq0X4", "https://youtu.be/xppQeS97Lrk"  ,"https://www.youtube.com/watch?v=LvAIoocY9gY&feature=youtu.be", "	https://www.youtube.com/watch?v=eijwTxhEOk8", "https://youtu.be/Z-ilALj_UZU", "https://youtu.be/VBfZDo9MTZ4", "https://youtu.be/Sd1h9bhMH2I", "https://www.youtube.com/watch?v=T6SMxm_UTvQ&feature=youtu.be", "https://www.youtube.com/watch?v=d6pF0N5FEt4&feature=youtu.be", "https://youtu.be/rxuv78XSEWU", "https://youtu.be/rohL6uSqYIU",
  "https://www.youtube.com/watch?v=YkT82VPOMOY&feature=youtu.be", "https://www.youtube.com/watch?v=4OeJCbi57_M&feature=youtu.be", "https://youtu.be/7KONx6_UhzM"
]

const youtubename = [
  "基於iBeacon微定位技術之室內導引跟隨系統", "整合精準室內定位之智慧停車場管理系統", "基於視覺密碼之輔助身分認證系統", "具移動偵測與串流技術之下車小幫手", "利用室內定位輔助智慧型尋物自走車", "旅遊尋寶手機APP製作", "基於GPS系統之影像補償系統", "VR 遊戲設計-虛擬慢跑機", "I voting", "旅遊Bar", "歐西克購物商城", "SuperMenu-基於手機GPS訊號之點餐系統", "自適應性時間序列資料過濾系統"	,  "旅遊推薦及快速旅程安排系統"
]


const stylesheets = {
  innertext: {
    alignitem:'center',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    height: '70%'
  },
  title: {
    fontSize: 30,
  },
  button:{
    "margin": "0 auto",
    "margin-top": 50,
    "background-color": "tomato",
    "width": "30%",
    "height": 50,
    "line-height": 50,
    "color": "white",
    "border-radius": 10,
    "cursor": "pointer"
  }
}



export default class Control extends Component {
  constructor (props) {
    super(props)

    this.state = {
      appname: "Loading...",
      appurl: "",
      qqurl: ""
    }

    this.random = this.random.bind(this)
    this.handleQuestionnaire = this.handleQuestionnaire.bind(this)
    this.handleVideo = this.handleVideo.bind(this)
  }

  componentDidMount(){
    this.random()
  }

  handleQuestionnaire(){
    console.log("Q")
    window.open(this.state.qqurl,'_blank')
    

    var num = Math.floor(Math.random() * (19 - 0 + 1)) + 0
    var app = apps[num]
    fetch(`http://140.115.197.16/?school=fcu&app=${app}`)
  }

  handleVideo(){
    console.log("v")
    window.open(this.state.appurl,'_blank')
    
    var num = Math.floor(Math.random() * (19 - 0 + 1)) + 0
    var app = apps[num]
    fetch(`http://140.115.197.16/?school=fcu&app=${app}`)
  }

  random(){
    var num = Math.floor(Math.random() * (19 - 0 + 1)) + 0
    var app = apps[num]

    var strUrl = location.search
    var id = 0
    if (strUrl.indexOf("?") != -1) {
      var search = strUrl.split("?");
      id = search[1]
      this.setState({
        appname: youtubename[id],
        appurl: youtube[id],
        qqurl: questionnaires[id]
      })
    }

    fetch(`http://140.115.197.16/?school=fcu&app=${app}`).then(
      this.setState({
         appname: youtubename[id]
    }))



    // this.setState({
    //     appname: num
    // })
    // console.log(num);
  }

  

  render(){
    return(
      <div style={stylesheets.innertext}>
        <h1>{this.state.appname}</h1>
        <div style={stylesheets.button} onClick={this.handleVideo}>觀看影片</div>
        <div style={stylesheets.button} onClick={this.handleQuestionnaire}>填寫問卷</div>
      </div>
    )

  }
}

