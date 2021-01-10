import React from 'react';
import './settings.scss';
import email from '../../img/email.svg'


class Settings extends React.Component {

  render() {

    return (
      <div className="settings">
        <div className="settings_section">
          <div className="settings_buttons">
            <div className="settings_cancel">
              <button className="settings_btn_cancel">Отменить</button>
            </div>
            <div className="settings_save">
              <button className="settings_btn_save">Сохранить</button>
            </div>
          </div>
          <div className="settings_block">
            <div className="settings_name">
              Имя <br/>
              <input type="text"/>
            </div>
            <div className="settings_adress">
              Адресс сайта <br/>
              <input type="text"/>
            </div>
          </div>
          <div className="settings_section_choose_options">
            <div className="settings_choose_options">
              <button className="settings_choose_btn">МЕССЕНДЖЕРЫ</button>
              <button className="settings_choose_btn_second">ОБРАТНЫЙ ЗВОНОК</button>
              <div className="settings_messengers">
                <div className="settings_messengers_img">
                  <img className="messengers_img" src={email} alt=""/>
                </div>
                <div className="settings_messengers_data">
                  <input className="messengers_enter_data" placeholder="Adress" type="email"/>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
        
    )
  }
}

export default Settings;