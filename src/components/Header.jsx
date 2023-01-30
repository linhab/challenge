import React from "react";
function Header (){
    const currentTime = new Date().getHours();
    let greeting;
    if (currentTime < 12) {
        greeting = "おはよう、Linh Pham";
      } else if (currentTime < 18) {
        greeting = "こんにちは、Linh Pham";
      } else {
        greeting = "こんばんは、Linh Pham";
      }
      
      return (
        <header>
          <h1>{greeting}</h1>
        </header>
      );
}

export default Header;