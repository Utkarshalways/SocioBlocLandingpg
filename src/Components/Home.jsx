import React from 'react'
import "../Style/Home.scss"
import Buttons from './MiniComponents/Buttons';
import hand from "../Assets/logo.png"
import Card from './MiniComponents/Card';
import Gradientdiv from './Gradientdiv';

const Home = () => {
  return (
    <>
      {/* this is first home basic landing page */}
      <Gradientdiv >
      <div className="base">
        <div id="home" className="home1">
          <div className="left">
            <div>
              <p className="heading1">Keep Calm &</p>
              <p className="heading2">collect Your NFTs</p>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, ex totam dicta autem unde laudantium aspernatur,
              corrupti ipsum nostrum, cumque tenetur perspiciatis animi. Ullam
              voluptas veniam non alias ab dolores?
            </p>

            <div className="getstarted">
              <Buttons Name="Get Started" cls="btncls" />
            </div>
          </div>

          <div className="right">
            <img src={hand} alt="Hand" />
          </div>
        </div>
        </div>
      </Gradientdiv>

        <div className="home2">
          this is home 2
          <div className="left2">
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
}

export default Home