import './AsteroidPopup.css'
import comet from '../images/comet.png'

function AsteroidPopup (props) {
    const asteroid = props.asteroid;
    return(
        <div className={asteroid ? `asteroid-popup asteroid-popup_active` : `asteroid-popup`}>
            <div className='asteroid-popup__container'>
                <img src={comet} alt='Эмоджи символ с каметой' className='asteroid-popup__comet'/>
                <h2 className="test">{asteroid ? asteroid.name.value : ''}</h2>
                    <table className='asteroid-popup__info'>
                        <tbody>
                        <tr>
                            <td className='asteroid-popup__description'>Дата максимального сближения</td>
                            <td className='asteroid-popup__data'>{asteroid ? asteroid.date.value : ''}</td>
                        </tr>
                        <tr>
                            <td className='asteroid-popup__description'>Ближайшее расстояние до Земли</td>
                            <td className='asteroid-popup__data'>{asteroid ? Math.floor(asteroid.distancekm.value).toLocaleString('ru-RU') : ''} км</td>
                        </tr>
                        <tr>
                            <td className='asteroid-popup__description'>Диаметр астероида</td>
                            <td className='asteroid-popup__data'>{asteroid ? Math.floor(asteroid.diameter.value) : ''} м</td>
                        </tr>
                        <tr>
                            <td className='asteroid-popup__description'>Скорость сближения с Землей</td>
                            <td className='asteroid-popup__data'>{asteroid ? asteroid.velocity.value : ''} км/с</td>
                        </tr>
                        <tr>
                            <td className='asteroid-popup__description'>Орбитальное тело</td>
                            <td className='asteroid-popup__data'>{asteroid ? asteroid.orbiting.value : ''}</td>
                        </tr>
                        <tr>
                            <td className='asteroid-popup__description'>Магнитуда</td>
                            <td className='asteroid-popup__data'>{asteroid ? asteroid.magnitude.value : ''}</td>
                        </tr>
                    </tbody>
                    </table>
                <button alt='Крестик' className='asteroid-popup__close-button' onClick={props.onClose} type='button' />
            </div>
            
        </div>
    )
}

export default AsteroidPopup
