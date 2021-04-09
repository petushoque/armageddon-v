import React from "react";
import './AsteroidsList.css'

import Asteroid from './Asteroid'
import Api from './Api'


const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    return (
      <ul className='asteroid-list'>
        {repos.map((repo) => {
          return (
            <li key={repo.id} className=''>
              <Asteroid data={repo}/>
              
            </li>
          );
        })}
      </ul>
    );
  };
  export default List;

//class  extends React.Component {
//    render () {
//        return(
//        <h1>Hello</h1>)
        /*
        return (
            <section className="asteroids">
                <ul className="asteroids__list">
                {phones.map((phone) => {
                    const { id } = phone;

                    return (
                        <li key={id.toString()}
                        className="shop-list__item"
                        onClick={() => addPhoneInCart(id)}>
                        <Asteroid phone={phone} />
                        </li>
                    )
                })}
                </ul>
            </section>
        )
        */
//    }
//}

//export default AsteroidsList

/* 
const ShopList = ({ phones, addPhoneInCart }) => {
  return (
    <section className="shop-list">
      <ul className="shop-list__list">
        {
          // Перебираем массив объектов, передавая каждый в компонент CartListItem.
          // В li передаём key, равный id и говорим, что при клике на элемент вызывается переданная функция, принимая id элемента
          phones.map((phone) => {
            const { id } = phone;

            return (
              <li key={id.toString()}
                  className="shop-list__item"
                  onClick={() => addPhoneInCart(id)}
              >
                <ShopListItem phone={phone} />
              </li>
            )
          })
        }
      </ul>
    </section>
  )
};



<p>ID: {repo.id}</p>
              <p>Name: {repo.name} </p>
              <p>Дата максимального сближения: {repo.close_approach_data[0].close_approach_date_full} </p>
              <p>Мнимальное расстояние до земли в км: {repo.close_approach_data[0].miss_distance.kilometers} </p>
              <p>Мнимальное расстояние до земли в расстояних до луны: {repo.close_approach_data[0].miss_distance.lunar} </p>
              <p>Минимальный диаметр в метрах: {repo.estimated_diameter.meters.estimated_diameter_min} </p>
              <p>Опасен? {repo.is_potentially_hazardous_asteroid ? 'yes' : 'no'}</p>
*/