import './AsteroidPopup.css'

function AsteroidPopup (props) {
    const closePopup = props.onClose;
    const card = props.card;
    return(
        <div className={`asteroid-popup `}>
            <div className="popup__image-container">
                    <h1 className="test">HELLO</h1>
            </div>
        </div>
    )
}

export default AsteroidPopup

//asteroid-popup_active