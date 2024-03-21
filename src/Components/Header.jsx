import React from 'react'
import "../Style/Header.scss"
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import Buttons from './MiniComponents/Buttons';
import logo from "../Assets/logo.png";

const Header = ({
  classname = "" 
}) => {
  return (
    <header className={classname}>
      <div className="logo">
      <img src={logo} alt="logo"  />
      </div>

      <div className="links">
        
          <HashLink to={"/home"} >Home</HashLink>
          <HashLink to={"/about"} >About Us</HashLink>
          <HashLink to={"/Contact"} >Contract</HashLink>
          

      </div>

      <div className="buttons">
        <Buttons Name={"Log In"} />
        <Buttons Name={'Sign Up'} />
      </div>


      
    </header>
  );
}

export default Header