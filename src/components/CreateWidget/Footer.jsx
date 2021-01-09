import React from 'react'
import './create.scss'

function CreateWidget() {
  return (
    // class create_place_widgets пустой, потому что там будут создаваться виджеты, дизайн для них я уже написал
      <footer className="create_footer">
        <hr className="create_hr" />
        <div className="footer_logotype">
          <a href="/">
            <img className="logotype_footer" src="https://via.placeholder.com/200x80" alt="" />
          </a>
        </div>
        <div className="footer_contracts">
          <a className="footer_a" href="/">Договор</a> <br />
          <a className="footer_a" href="/">Документация</a> <br />
          <a className="footer_a" href="/">API</a> <br />
          <a className="footer_a" href="/">Политика конфиденциальности</a>
        </div>
        <div className="footer_social">
          supportwidgets@gmail.com <br />
          <br />
          <a href="/">
            <img className="footer_social_icons" src="https://via.placeholder.com/40" alt="" />
            <img className="footer_social_icons" src="https://via.placeholder.com/40" alt="" />
            <img className="footer_social_icons" src="https://via.placeholder.com/40" alt="" />
            <img className="footer_social_icons" src="https://via.placeholder.com/40" alt="" />
          </a>

        </div>
      </footer>
  )
}


export default CreateWidget;
