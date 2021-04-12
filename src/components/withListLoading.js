import React from 'react';
import earth from '../images/earth.gif'

function WithListLoading(Component) {
    return function WihLoadingComponent({ unitOfMeasurement, isLoading, ...props }) {
      if (!isLoading) return <Component { ...props } unitOfMeasurement/>;
      return (
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
          Нужно немного подождать
          <img src={earth} />
        </p>
      );
    };
  }
  export default WithListLoading;