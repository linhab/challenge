import React,{useState} from "react";

function Zangyou (){
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
return <div className="zangyou">
<div className="square" onClick={handleClick}
        style={{ backgroundColor: active ? "#F8FAFB" : "white" }}>
  <div className="ellipse-zangyou"></div>
  <h3 className="text">残業</h3>
  <img className="logo"
  src="../images/zangyou.png"
      alt="zangyou_img"
    />
</div>
</div>
}
export default Zangyou;