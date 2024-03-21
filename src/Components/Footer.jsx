import React from 'react'
import "../Style/Footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="First">
        <h1>SocioBloc</h1>
        <p>@all rights reserved</p>
      </div>

      <div className="last">
        <h2>Follow us</h2>

        <div className="links">
          <a
            href="https://www.linkedin.com/in/utkarsh-sharma-164733228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="blank"
          >
            Linked In
          </a>
          <a href="https://instagram.com/utkarshalways" target="blank">
            Instagram
          </a>
          <a href="https://github.com/utkarshalways" target="blank">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer




