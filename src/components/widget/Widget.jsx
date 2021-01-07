import React, { Component } from 'react';
import './widget.scss';
import chat from '../../img/chat.svg'
import vk from '../../img/vk.svg'
import inst from '../../img/inst.svg'

class Widget extends Component {

  state = {
    showSocial: false
  }

  showIcon = () => {
    this.setState({
      showSocial: !this.state.showSocial
    })
  }

  render() {

    if (this.state.showSocial) {
      return (
        <div className="widget">
          <div onClick={this.showIcon} className="widget__chat">
            <div className="widget__chat-img">
              <img src={chat} alt="" />
            </div>
          </div>
          <div className="widget__main">
            <div className="widget__main-social">
              <div className="widget__chat-img vk">
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

    return (
      <div className="widget">
        <div onClick={this.showIcon} className="widget__chat">
          <div className="widget__chat-img">
            <img src={chat} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Widget;