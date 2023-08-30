import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At Alfredos Restaurant, we believe that dining is more than just a meal. it is an experience that engages the senses and creates cherished memories. Located in Festac, our Restaurant is a testament to our passion for impeccable cuisine. Our commitment to using the finest ingredients  and providing warm and attentive service defines who we are. Whether you are seeking a romantic dinner or a gathering with friends, we invite you to indulge in the art of gastronomy with us.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" width={500} />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">A journey that began 2years ago, Alfredos Restaurant has been a cornerstone of culinary excellence in Festac. Founded by Mr.Alfred Ekene Obelle, a visionary with an unrelenting passion for food, our restaurant started as a humble endeavor and has grown into a symbol of dining sophistication. Over the years, we have evolved our menu, embracing both tradition and innovation to create a symphony of flavors that reflect the essence of our city.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
