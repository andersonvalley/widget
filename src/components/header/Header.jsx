import React from 'react';
import './header.scss';
import logoHeader from '../../img/logoHeader.png';
import user from '../../img/user.svg';


const Header = () => {
  return (
    <div className="header">
      <div className="section">
        <div className="header">

          <div className="header_logotype">
            <img className="logotype_main" src="https://via.placeholder.com/200x80" alt=""/>
          </div>

          <div className="header_tools">
            <nav className="header_nav">
              <a className="header_link" href="/">
                <button className="link_btn">Войти</button>
              </a>
            </nav>
            <a className="header_btn" href="/">
              <button className="btn">
                <img className="btn_sign_in" src="//avatars.mds.yandex.net/get-yapic/0/0-0/islands-retina-middle" alt="" />
              </button>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header;