import React from "react";
import './Menu.css'

class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <p><input type="checkbox" name="hazardousCheckbox" id="hazardousCheckbox" value="true" />
                <label for="hazardousCheckbox">Показать только опасные</label></p>
                <div className='menu__distance'>
                    <p>Расстояние </p>
                    <input type="radio" name="distance" id="km" value="km" />
                        <label for="km">в километрах </label> 
                    <input type="radio" name="distance" id="ln" value="ln" />
                        <label for="ln">в дистанциях до луны</label>
                </div>
            </div>
        )
    }
}

export default Menu