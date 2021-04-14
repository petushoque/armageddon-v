import React from "react";
import './Menu.css'



function Menu () {

    function chechCheckbox () {
        const checkbox = document.getElementById('hazardousCheckbox')
        const undengerousAsteroids = document.querySelectorAll('.asteroid__unhazardous')
        if (checkbox.checked) {            
            for (let i = 0; i < undengerousAsteroids.length; i++) {
                undengerousAsteroids[i].classList.add('asteroid_hyde');
              }
        }
        else {
            for (let i = 0; i < undengerousAsteroids.length; i++) {
                undengerousAsteroids[i].classList.remove('asteroid_hyde');
              }
        }
    }

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

    return (
        <div className='menu menu_active'>
            <p className='menu__paragraph'><input className="menu__hazardous-checkbox" type="checkbox" name="hazardousCheckbox" id="hazardousCheckbox" value="true" onClick={chechCheckbox}/>
            <label htmlFor="hazardousCheckbox">Показать только опасные</label></p>
            <div className='menu__distance'>
                    <p className='menu__paragraph'>Расстояние  
                    <input className="menu__distance-radio" type="radio" name="distance" id="km" value="km" onClick={checkRadiobox} defaultChecked/>
                    <label className="menu__distance-label" htmlFor="km">в километрах</label>
                    , 
                    <input className="menu__distance-radio" type="radio" name="distance" id="ln" value="ln" onClick={checkRadiobox} />
                    <label className="menu__distance-label" htmlFor="ln">в дистанциях до луны</label>                    
                    </p>
            </div>
        </div>
    )
    
}

export default Menu