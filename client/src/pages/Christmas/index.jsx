import React from 'react';
import ChristmasOrder from '../../components/ChristmasOrder';
import ChristmasCookiesInfo from '../../components/ChristmasCookiesInfo';
import Christmas1 from '../../assets/images/Christmas1.jpg';
import Christmas2 from '../../assets/images/Christmas2.jpg';
import Christmas3 from '../../assets/images/Christmas3.jpg';
import Christmas4 from '../../assets/images/Christmas4.jpg';
import './index.scss';

const Christmas = () => {
  return (
    <div className="christmas-page">
      <div className="image-container">
        <img className="small-image" src={Christmas1} alt="Christmas1" />
        <img className="small-image" src={Christmas2} alt="Christmas2" />
        <img className="small-image" src={Christmas3} alt="Christmas3" />
        <img className="small-image" src={Christmas4} alt="Christmas4" />
      </div>
      
      <div className="ChristmasCookiesInfo">
       <ChristmasCookiesInfo />
      </div>
      <div className="ChristmasOrderCard">
        <ChristmasOrder />
      </div>
    </div>
  );
};

export default Christmas;
