// import React from 'react';
// import './Modals.css';
// import { images } from '../../constants';

// const Modals = (closeModal) => (

//   <div className="food-modals-container">
//     <p className="food-modal-cancel"><img src={images.cancel} width={24} height={24} /></p>
//     <div className="foodcontainer">
//       <p>Rice and Chicken</p>
//       <p>NGN 5000</p>
//       <img src={images.welcome} width={100} height={100} alt="rice and chicken" />
//     </div>
//     <div className="foodcontainer">
//       <p>Spaghetti and Chicken</p>
//       <p>NGN 5000</p>
//       <img src={images.photo10} width={100} height={100} alt="spaghetti and chicken" />
//     </div>
//     <div className="foodcontainer">
//       <p>Vegetable Soup</p>
//       <p>NGN 8000</p>
//       <img src={images.photo9} width={100} height={100} alt="vegetable soup" />
//     </div>
//     <div className="foodcontainer">
//       <p>Fruit Salad</p>
//       <p>NGN 6000</p>
//       <img src={images.photo6} width={100} height={100} alt="fruit salad" />
//     </div>
//   </div>
// );

// export default Modals;

import React from 'react';
import './foodModals.css';
import { images } from '../../constants';

const Modals = ({ closeModal }) => (
  <div className="food-modals-container">
    <button type="button" className="food-modal-cancel" onClick={closeModal}>
      <img src={images.cancel} width={24} height={24} alt="Cancel" />
    </button>
    <div className="foodcontainer">
      <p>Rice and Chicken</p>
      <p>NGN 5000</p>
      <img src={images.welcome} width={100} height={100} alt="rice and chicken" />
    </div>
    <div className="foodcontainer">
      <p>Spaghetti and Chicken</p>
      <p>NGN 5000</p>
      <img src={images.photo10} width={100} height={100} alt="spaghetti and chicken" />
    </div>
    <div className="foodcontainer">
      <p>Vegetable Soup</p>
      <p>NGN 8000</p>
      <img src={images.photo9} width={100} height={100} alt="vegetable soup" />
    </div>
    <div className="foodcontainer">
      <p>Fruit Salad</p>
      <p>NGN 6000</p>
      <img src={images.photo6} width={100} height={100} alt="fruit salad" />
    </div>
  </div>
);

export default Modals;
