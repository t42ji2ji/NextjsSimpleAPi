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

const stylesheets = {
  innertext: {
    alignitem:'center',
    fontSize: 50,
    textAlign: 'center'
  },
  title: {
    fontSize: 30,
  }
}



export default class Control extends Component {
  constructor (props) {
    super(props)

    this.state = {
      appname: "none"
    }

    this.random = this.random.bind(this)
  }

  componentDidMount(){
    this.random()
  }


  random(){
    var num = Math.floor(Math.random() * (19 - 0 + 1)) + 0
    var app = apps[num]

    var strUrl = location.search
    var id = ''
    if (strUrl.indexOf("?") != -1) {
      var search = strUrl.split("?");
      console.log(search[1])
      id = search[1]
    }

    fetch(`http://140.115.197.16/?school=fcu&app=${app}`).then(
      this.setState({
         appname: num
       })
     )
     .then(
       setTimeout(function() { window.location = `https://www.openedu.tw/course.jsp?id=${id}`}.bind(this), 2000)
     )
      

    // this.setState({
    //     appname: num
    // })
    // console.log(num);
  }

  

  render(){
    return(
      <div style={stylesheets.innertext}>
        {/*<p style={stylesheets.title}>恭喜抽到</p>
        <br></br>
        <p>{this.state.appname}. {apps[this.state.appname]}</p>*/}
      </div>
    )
  }
}

