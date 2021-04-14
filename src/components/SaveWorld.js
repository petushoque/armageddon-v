import './SaveWorld.css'


function SaveWorld (props) {

    function test () {console.log(props.destroyList)

        let oldElements = document.querySelectorAll('.save-world__item');
        for( let i = 0; i < oldElements.length; i++ ){
            oldElements[i].outerHTML = '';
        }
    
        props.destroyList.forEach((element) => {
            let asteroid = document.createElement('p');
            asteroid.className = 'save-world__item';
            asteroid.innerHTML = element;
            document.querySelector('.save-world__list').append(asteroid);
        })

        
    }
    
    function destroyAsteroids () {
        props.resetList()

        let oldElements = document.querySelectorAll('.save-world__item');
        for( let i = 0; i < oldElements.length; i++ ){
            oldElements[i].outerHTML = '';
        }
    }

    return (
        <div className='save-world'>
            <h2 className='save-world__title'>Список астероидов на уничтожение:</h2>
            <button className='save-world__show-list-button' onClick={test}>
            &#128209; Загрузить список
            </button>
            
            <div className='save-world__list'>
            </div>
            
            <button className='save-world__destroy-button' onClick={destroyAsteroids}>
            &#128640; Поехали!
            </button>

            <p className='save-world__description'>*Даю согласие на отправку бригады имени Брюса Уиллиса на выбранные астероиды &#128221;</p>
            
        </div>
    )
}

export default SaveWorld

/*


                <ul className='123'>
                    {props.destroyList.forEach((asteroid, i) => {
                        return (
                            <li key={i} className=''>
                            <p>Hello</p>              
                            </li>
                        );
                    })}
                </ul>

key={asteroid.id}

<ul className='asteroid-list'>
        {repos.map((repo) => {
          return (
            <li key={repo.id} className=''>
              <Asteroid data={repo} onAsteroidClick={props.onAsteroidClick} onButtonClick={props.onButtonClick}/>              
            </li>
          );
        })}
      </ul>

*/