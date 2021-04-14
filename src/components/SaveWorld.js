import './SaveWorld.css'


function SaveWorld (props) {

    function test () {

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