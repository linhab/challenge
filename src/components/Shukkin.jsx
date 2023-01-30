import React from "react";

function Shukkin (props){
    
  const submitUser = async ()=>{
  const myData = {
    status:"出勤"}
  
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
return (<div className="shukkin">
      <div className="square" onClick={submitUser}>
        <div className="ellipse-shukkin"></div>
        <h3 className="text">出勤</h3>
        <img className="logo"
      src="../images/shukkin.png"
      alt="shukkin_img"
    />
      </div>
    </div>
)}
export default Shukkin;