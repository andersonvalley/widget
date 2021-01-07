import React from 'react';
import './header.scss';
import logoHeader from '../../img/logoHeader.png';
import user from '../../img/user.svg';


const Header = () => {
  return (
    <div className="header">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,300&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <div className="section">
        <div className="header">
          <div className="header_logo">
            <a href="">
              <img className="logo" src={logoHeader} alt=""/>
            </a>
          </div>
          <nav className="header_nav">
            <a className="header_link" href="">
              <button className="link_btn">Войти</button>
            </a>
            <a className="header_btn" href="">
              <button>
                <img className="btn_sign_in" src={user} alt=""/>
              </button>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header;