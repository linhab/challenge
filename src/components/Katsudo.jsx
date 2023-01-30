import React from "react";

function Katsudo (props){
  const date = props.datetime
  const d = new Date(date)
  console.log(d)
  console.log(date)
  
  function formatDate() {
    const days = ['日', '月','火','水','木','金','土']
    const year = d.getFullYear()
    const date = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const dayName = days[d.getDay()] //dinh dang ngay JP
    const formatted = `${year}年 ${month}月 ${date}日（${dayName}）`
    return formatted
  }
  function formatTime(){
    const hour =  d.getHours().toString().padStart(2, "0")  
    const munite = d.getMinutes().toString().padStart(2, "0") 
    const second = d.getSeconds().toString().padStart(2, "0")
    const Time = `${hour}時${munite}分${second}秒`
    return Time
  }
  function setButtonClass (){
    if (props.status === "出勤") {
      return "button-shukkin button-shukkin-text ";
    }else {
      return "button-taikin button-taikin-text ";
    }
  }
  return (<div className="rectangle1">
    <h4 className="day">{formatDate(d)} </h4>
    <h4 className="time">{formatTime(d)} </h4>
        <h4 className={setButtonClass()}>{props.status}</h4>
    
    </div>
    )
    }
export default Katsudo;