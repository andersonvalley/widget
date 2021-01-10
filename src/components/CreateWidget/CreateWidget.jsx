import React from 'react'
import './create.scss'
import {NavLink} from 'react-router-dom'
import ExampleWidget from '../ExampleWidget/ExampleWidget.jsx'

function CreateWidget() {
    return (
        // class create_place_widgets пустой, потому что там будут создаваться виджеты, дизайн для них я уже написал
        <div className="create">
            <div className="create_section">
                <div className="create_widget">
                    Виджеты
                    <NavLink className="create_btn_main" to="/settings">
                        <button className="create_btn">Создать виджет</button>
                    </NavLink>
                </div>
                <div className="create_place_widgets">
                    <ExampleWidget />
                </div>
            </div>
        </div>
    )
}


export default CreateWidget;
