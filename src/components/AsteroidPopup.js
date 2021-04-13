import './AsteroidPopup.css'

function AsteroidPopup (props) {
    const asteroid = props.asteroid;
    return(
        <div className={asteroid ? `asteroid-popup asteroid-popup_active` : `asteroid-popup`}>
            <div>
                    <h1 className="test">HELLO</h1>
                    <p>{console.log(props.asteroid.id)}</p>
            </div>
        </div>
    )
}

export default AsteroidPopup

/*
console.log(asteroid.target.attributes.name, asteroid.target.attributes.date, asteroid.target.attributes.hazardous,
    asteroid.target.attributes.distanceKm, asteroid.target.attributes.distanceLn, asteroid.target.attributes.diameter,
    asteroid.target.attributes.velocity, asteroid.target.attributes.orbiting, asteroid.target.attributes.magnitude)
    console.log(selectedAsteroid)
*/