import React from 'react';
import './settings.scss';
import vk from '../../img/vk.svg'
import inst from '../../img/inst.svg'

const Settings = () => {


  return (
    <div className="settings">
      <h1>Выберите мессенджер</h1>
      <div className="choose__widget">
        <div className="widget__main-social">
          <div className="widget__chat-img vk settings-s">
            <img src={vk} alt="" />
          </div>
        </div>
        <div className="widget__main-social">
          <div className="widget__chat-img inst">
            <img src={inst} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;