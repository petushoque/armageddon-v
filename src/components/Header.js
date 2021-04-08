import React from "react";
import './Header.css'

class Header extends React.Component {
    render () {
        return (
            <div className='header'>
                <div className='header__header'>
                    <h1 className='header__title'>ARMAGEDDON-V</h1>
                    <p className='header__subtitle'>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
                </div>
                <div className='header__nav'>
                    <p>Астероиды</p>
                    <p>Уничтожение</p>
                </div>
            </div>
        )
    }
}

export default Header