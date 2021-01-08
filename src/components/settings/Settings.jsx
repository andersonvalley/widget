import React from 'react';
import './settings.scss';


class Settings extends React.Component {

  render() {

    return (
      <div className="settings">
        

        <div className="choose__widget">
          <div className="widget__main-social">
            <div className="widget__chat-img vk settings-s">
              <img src={this.props.photo} alt={this.props.title} />
            </div>
          </div>

          {/* <div className="widget__main-social">
                  <div className="widget__chat-img inst">
                    <img src={inst} alt="" />
                  </div>
                </div> */}
        </div>
    
      </div>
    )
  }
}

export default Settings;