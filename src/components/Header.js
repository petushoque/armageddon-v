import React from "react";
import './Header.css'

class Header extends React.Component {
    render () {

        const menu = document.querySelector('.menu');
        const mainContent = document.querySelector('.main-content');
        const saveWorld = document.querySelector('.save-world');

        function checkRadiobox () {
            const radioInput = document.querySelectorAll('.header__radio');

            for (let i = 0; i < radioInput.length; i++)
                {
                    if (radioInput[0].checked === true) {
                        menu.classList.add('menu_active')
                        mainContent.classList.add('main-content_active')
                        saveWorld.classList.remove('save-world_active')
                    }
                    if (radioInput[1].checked === true) {                        
                        menu.classList.remove('menu_active')
                        mainContent.classList.remove('main-content_active')
                        saveWorld.classList.add('save-world_active')
                    }
            }
        }

        return (
            <div className='header'>
                <div className='header__header'>
                    <h1 className='header__title'><label htmlFor="asteroids">ARMAGEDDON-V</label></h1>
                    <p className='header__subtitle'>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
                </div>
                <div className='header__nav'>
                    <input className="header__radio" type="radio" name="headerradio" id="asteroids" value="asteroids" onClick={checkRadiobox} defaultChecked/>
                    <label className="header__radio-label" htmlFor="asteroids">Астероиды</label>
                    <input className="header__radio" type="radio" name="headerradio" id="saveteam" value="saveteam" onClick={checkRadiobox} />
                    <label className="header__radio-label" htmlFor="saveteam">Уничтожение</label>
                </div>
            </div>
        )
    }
}

export default Header
/*


function checkRadiobox () {
        const radioInput = document.querySelectorAll('.menu__distance-radio');
        const kmDistance = document.querySelectorAll('.asteroid__distance_km');
        const lnDistance = document.querySelectorAll('.asteroid__distance_ln')
        for (var i = 0; i < radioInput.length; i++)
            {
                if (radioInput[0].checked === true) {
                    for (let i = 0; i < lnDistance.length; i++) {
                        lnDistance[i].classList.add('asteroid__distance_hyde');
                      }
                    for (let i = 0; i < kmDistance.length; i++) {
                        kmDistance[i].classList.remove('asteroid__distance_hyde');
                    }
                }
                if (radioInput[1].checked === true) {
                    for (let i = 0; i < lnDistance.length; i++) {
                        lnDistance[i].classList.remove('asteroid__distance_hyde');
                      }
                    for (let i = 0; i < kmDistance.length; i++) {
                        kmDistance[i].classList.add('asteroid__distance_hyde');
                    }
                }
        }
    }

<p className='menu__paragraph'>Расстояние  
                    <input className="menu__distance-radio" type="radio" name="distance" id="km" value="km" onClick={checkRadiobox} defaultChecked/>
                    <label className="menu__distance-label" htmlFor="km">в километрах</label>
                    , 
                    <input className="menu__distance-radio" type="radio" name="distance" id="ln" value="ln" onClick={checkRadiobox} />
                    <label className="menu__distance-label" htmlFor="ln">в дистанциях до луны</label>                    
                    </p>

                    */