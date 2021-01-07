import React from 'react';
import './header.scss';
import logoHeader from '../../img/logoHeader.png';
import user from '../../img/user.svg';


const Header = () => {
  return (
    <div className="header">
      <div className="section">
        <div className="header">
          <div className="header_logo">
            <a href="/">
              <img className="logo" src={logoHeader} alt="" />
            </a>
          </div>
          <nav className="header_nav">
            <a className="header_link" href="/">
              <button className="link_btn">Войти</button>
            </a>
            <a className="header_btn" href="/">
              <button className="btn">
                <img className="btn_sign_in" src={user} alt="" />
              </button>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header;