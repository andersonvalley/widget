import React from 'react';
import './widget.scss';
import chat from '../../img/chat.svg'

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__chat">
        <div className="widget__chat-img">
          <img src={chat} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Widget;