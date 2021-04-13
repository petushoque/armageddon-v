import React, { useEffect, useState } from "react";
import './Menu.css'



function Menu (props) {

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

//РАБОТАЕТ НЕВЕРНО

    function checkRadiobox () {
        const radioInput = document.querySelectorAll('.menu__distance-radio');
        const kmDistance = document.querySelectorAll('.asteroid__distance_km');
        const lnDistance = document.querySelectorAll('.asteroid__distance_ln')
        for (var i = 0; i < radioInput.length; i++)
            {
                if (radioInput[0].checked === true) {

                    console.log(radioInput[0].value)
                    console.log(kmDistance)
                    for (let i = 0; i < lnDistance.length; i++) {
                        lnDistance[i].classList.add('asteroid__distance_hyde');
                      }
                    for (let i = 0; i < kmDistance.length; i++) {
                        kmDistance[i].classList.remove('asteroid__distance_hyde');
                    }
                }
                if (radioInput[1].checked === true) {
                    console.log(radioInput[1].value)
                    console.log(lnDistance)
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
        <div className='menu'>
            <p><input className="menu__hazardous-checkbox" type="checkbox" name="hazardousCheckbox" id="hazardousCheckbox" value="true" onClick={chechCheckbox}/>
            <label for="hazardousCheckbox">Показать только опасные</label></p>
            <div className='menu__distance'>
                    <p>Расстояние </p> 
                    <input className="menu__distance-radio" type="radio" name="distance" id="km" value="km" onClick={checkRadiobox} defaultChecked/>
                    <label className="menu__distance-label" for="km">в километрах</label>
                    <p>,</p> 
                    <input className="menu__distance-radio" type="radio" name="distance" id="ln" value="ln" onClick={checkRadiobox} />
                    <label className="menu__distance-label" for="ln">в дистанциях до луны</label>                    
            </div>
            {console.log(props.unit)}
        </div>
    )
    
}

export default Menu