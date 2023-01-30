import React from "react";

function MiddleRight (){
return <div className="middle">
<h2 className="statics">退勤統計</h2>
<div className="shukkin-hi">
  <h5>出勤日</h5>
  <h1 className="shukkin-hi-day">14日</h1>
</div>
<div className="shukkin-holiday">
  <h5>土日祝</h5>
  <h1 className="shukkin-hi-day">6日</h1>
</div>
<div className="shukkin-time">
  <h5>出勤時間</h5>
  <h1 className="shukkin-hi-day">102時30分</h1>
  <div className="button-shosai">
    <h4 className="button-shosai-text">詳細</h4>
    <img className="i"
      src="../images/i.svg"
      alt="i_img"></img>
  </div>
</div>
<div className="zangyou-time">
  <h5>残業時間</h5>
  <h1 className="shukkin-hi-day">10時</h1>
</div>
<div className="kyuuka-time">
  <h5>休憩時間</h5>
  <h1 className="shukkin-hi-day">15時</h1>
</div>

</div>
}
export default MiddleRight;