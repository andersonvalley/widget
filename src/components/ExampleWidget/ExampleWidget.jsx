import React from 'react'
import './exampleWidget.scss'
import bin from '../../img/bin.svg'
import change from '../../img/change.svg'

// const adressSite = - here will be adress site
// const testingTime = - here will be testing time

function ExampleWidget() {
    return (
        <div>
            <div className="example_widget">
                    <div className="example_other_simbol">
                        <a className="example_simbol_bin" href="/">
                            <img className="bin_set" src={bin} alt=""/>
                        </a>
                        <a className="example_simbol_change" href="/">
                            <img className="change_set" src={change} alt=""/>
                        </a>
                    </div>
                    <div className="example_on_off">
                        <input type="checkbox" />
                    </div>
                    <div className="example_where">
                        Виджет на htttp/docibolit.ru
                    </div>
                    <div className="example_time">
                        Тестовое время на 3 месяца
                    </div>
                    <div className="example_different_moves">
                        <a className="back_call" href="/">
                            <button className="back_call_btn">
                                Обратный звонок
                            </button>
                        </a>
                    
                    </div>
                    <div className="example_messengers">
                    <a className="messengers" href="/">
                        <button className="messengers_btn">
                            Мессенджеры
                        </button>
                    </a>
                    </div>
                </div>
            </div>
    )
}










export default ExampleWidget;