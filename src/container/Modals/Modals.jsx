import React from 'react';
import './Modals.css';
import welcome from '../../assets/welcome.png';

const Modals = () => (
  <div className="food-modals-container">
    <div className="foodcontainer">
      <p>Rice and Chicken</p>
      <p>NGN 5000</p>
      <img src={welcome} width={50} height={50} alt="rice and chicken" />
    </div>
    <div className="foodcontainer">
      <p>Spaghetti and Chicken</p>
      <p>NGN 5000</p>
      <img src={welcome} width={50} height={50} alt="spaghetti and chicken" />
    </div>
    <div className="foodcontainer">
      <p>Vegetable Soup</p>
      <p>NGN 8000</p>
      <img src={welcome} width={50} height={50} alt="vegetable soup" />
    </div>
    <div className="foodcontainer">
      <p>Fruit Salad</p>
      <p>NGN 6000</p>
      <img src={welcome} width={50} height={50} alt="fruit salad" />
    </div>
  </div>
);

export default Modals;
