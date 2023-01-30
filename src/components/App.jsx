import React, { useState, useEffect } from "react";
import Header from "./Header";
import Shukkin from "./Shukkin";
import Taikin from "./Taikin";
import Zangyou from "./Zangyou";
import Kyuuka from "./Kyuuka";
import MiddleLeft from "./MiddleLeft";
import MiddleRight from "./MiddleRight";


function App(){
    const [attendances, setAttendances] = useState([]);
    const fetchData = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/attendance");
        const data = await response.json();
        return setAttendances(data.slice(0,6));
      }
      useEffect(() => {
        fetchData();
      },[])
    const updateAttendances = (x)=>{
        setAttendances(x.slice(0,6))
    }
    return (
    <div>
    <Header/>
    <Shukkin 
        setAttendances={updateAttendances}
        attendances ={attendances}
    />    
    <Taikin
        setAttendances={updateAttendances}
        attendances ={attendances}
    />
    <Zangyou/>
    <Kyuuka/>
    <MiddleLeft 
        attendances ={attendances}        
    />
    <MiddleRight/>
    </div>
    );
}
export default App; 