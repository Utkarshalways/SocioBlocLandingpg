import React, { useEffect } from 'react'
import { useState } from 'react';
import "../Style/_Storage.scss";

const Gradientdiv = ({
children
}) => {



        const [cursorPosition, setcursorPosition] = useState({x:0,y:0});

        useEffect(() => {


          const updategradient = (e) => {
            setcursorPosition({x:e.clientX,y:e.clientY-100})
          }
          // console.log(cursorPosition);


          window.addEventListener("mousemove",updategradient);
        
          return () => {
            window.removeEventListener("mousemove",updategradient);
          }
        }, [cursorPosition])
        

//  
  return (
    <div
      className="gradientdiv"
      style={{
        background: ` radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px ,  #d265f9 0%,  #743ad5 20%,  #d53a9d 100%)`,
      }}
    >
      {children}
    </div>
  );

}

export default Gradientdiv