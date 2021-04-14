import React from 'react';
import earth from '../images/earth.gif'
import './withListLoading.css'

function WithListLoading(Component) {
    return function WihLoadingComponent({ unitOfMeasurement, isLoading, ...props }) {
      if (!isLoading) return <Component { ...props } unitOfMeasurement/>;
      return (
        <p className='text' style={{ textAlign: 'center', fontSize: '30px' }}>
          Нужно немного подождать
          <img className='earth' src={earth} alt='Изображение крутящейся Земли'/>
        </p>
      );
    };
  }
  export default WithListLoading;