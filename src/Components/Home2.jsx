import React from "react";
import "../Style/Home2.scss";
import Gradientdiv from "./Gradientdiv";
import Card from "./MiniComponents/Card";
import { useState } from "react";
import { useEffect } from "react";

const Home2 = () => {
  const [cursorPointer, setcursorPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setcursorPointer({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", setcursorPointer);

    return () => {
      window.removeEventListener("mousemove", setcursorPointer);
    };
  }, [cursorPointer]);

 

  return (
    <>
      <div className="home2">
        this is second home
        <div className="left2" 
        
        // style={{
        //     onmouseOver= transform:`translateX(10px)`;
        // }} 
        >
                  <Card
            imgsrc="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar__1x.png"
            alt="Logo"
            text="this is just for the texting now this will contain the paragraph"
          />
          <Card
            imgsrc="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar__1x.png"
            alt="Logo"
            text="this is just for the texting now this will contain the paragraph"
          />
          <Card
            imgsrc="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar__1x.png"
            alt="Logo"
            text="this is just for the texting now this will contain the paragraph"
          />
          <Card
            imgsrc="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar__1x.png"
            alt="Logo"
            text="this is just for the texting now this will contain the paragraph"
          />
        </div>
      </div>
    </>
  );
};

export default Home2;
