import React,{useState} from "react";

function Kyuuka (){
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
return <div className="kyuuka">
<div className="square" onClick={handleClick}
        style={{ backgroundColor: active ? "#F8FAFB" : "white" }}>
  <div className="ellipse-kyuuka"></div>
  <h3 className="text">休暇</h3>
  <img className="logo"
  src="../images/kyuuka.png"
      alt="kyuuka_img"
    />
</div>
</div>
}
export default Kyuuka;