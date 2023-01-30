import React from "react";

function Taikin (props){
  
  const submitUser = async ()=>{
  const myData = {
    status:"退勤"}
  
  const result = await fetch('http://127.0.0.1:8000/api/attendance',{
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(myData)
    })
    const resultInJson = await result.json();
    props.setAttendances ([resultInJson,...props.attendances])
  }
    
return (<div className="taikin">
    <div className="square" onClick={submitUser}>
     <div className="ellipse-taikin"></div>
     <h3 className="text">退勤</h3>
     <img className="logo"
  src="../images/taikin.png"
      alt="taikin_img"
    />

    </div>
</div>
)}
export default Taikin;