import React from 'react'
import "./Style/Buttons.scss"

const Buttons = ({
    Name = "",
    cls = ""
}) => {
  return (
   
      <button className= {`border-gradient  ${cls}`} >
       {Name}
      </button>
   
  );
}

export default Buttons