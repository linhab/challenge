import React from "react";
import Katsudo from "./Katsudo";

function MiddleLeft (props){

return <div className="middle">
<h2 className="history">最近の活動</h2> 
{props.attendances && props.attendances.length > 0 && props.attendances.map(userObj => (
  <div key={userObj.id}>
  <Katsudo
  datetime = {userObj.datetime}
  status = {userObj.status}
  />
</div> ))}
</div>
}
export default MiddleLeft;