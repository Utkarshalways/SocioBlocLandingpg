import React from 'react'
import "./Style/Card.scss"

const Card = ({

  img = "",
  alt ="",
  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore id harum quo amet, voluptatem error!"



}) => {
  return (
    <div className='card' >

    <div>
    <img src={img} alt={alt} />
    </div>

    <div>

      {text}
    
    </div>
        
    </div>
  )
}

export default Card