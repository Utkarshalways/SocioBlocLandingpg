import React, { useEffect } from 'react'
import { useState } from 'react';

const Gradientdiv = ({
children
}) => {

    


        const [cursorPosition, setcursorPosition] = useState({x:0,y:0});

        useEffect(() => {
          const updategradient = (e) => {
            setcursorPosition({x:e.clientX,y:e.clientY})
          }
          console.log(cursorPosition);


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
        background: ` radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px ,   0%,  20%,  100%)`,
      }}
    >
      {children}
    </div>
  );
}

export default Gradientdiv