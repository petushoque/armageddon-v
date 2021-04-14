import './SaveWorld.css'

function SaveWorld (props) {
    function test () {console.log(props.destroyList)}
    function testTest () {props.resetList()}
    return (
        <div className='save-world'>
            <h2>IT WORKS</h2>
            <p>
            Юрий Гагарин
Лётчик-космонавт СССР, Герой Советского Союза, кавалер высших знаков отличия ряда государств, почётный гражданин многих российских и зарубежных городов. Полковник ВВС СССР, военный лётчик 1-го класса, заслуженный мастер спорта СССР, член ЦК ВЛКСМ, депутат Верховного Совета СССР 7-го и 8-го созывов.
            </p>
            <button onClick={test}>SHOW LOST</button>
            <button onClick={testTest}>RESET LOST</button>
        </div>
    )
}

export default SaveWorld