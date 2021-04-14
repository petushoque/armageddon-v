import './SaveWorld.css'


function SaveWorld (props) {

    function test () {console.log(props.destroyList)

        let oldElements = document.querySelectorAll('.alert'); // обращаю внимание на точку

        // Вариант адын
        for( let i = 0; i < oldElements.length; i++ ){
            oldElements[i].outerHTML = "";
        }
    
        props.destroyList.forEach((element) => {
            let asteroid = document.createElement('p');
            asteroid.className = "alert";
            asteroid.innerHTML = element;
            document.querySelector('.save-world__list').append(asteroid);
        })

        
    }
    
    function testTest () {props.resetList()

    }

    return (
        <div className='save-world'>
            <h2 className='save-world__title'>Список астероидов на уничтожение:</h2>
            <button onClick={test}>SHOW LOST</button>
            <button onClick={testTest}>RESET LOST</button>
            <div className='save-world__list'>

            </div>
            
            
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