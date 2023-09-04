import React from 'react';
import { MenuItem } from '../../components';
import { data, images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Our Club</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to Alfredos, where the night comes alive with pulsating beats, electrifying energy, and an atmosphere that transcends the ordinary. Established with a passion for entertainment and a commitment to redefining nightlife, Alfredos stands as an iconic destination for those seeking an unforgettable experience. At Alfredos, we believe that the night is a canvas of possibilities, where every moment is an opportunity to create memories that resonate for a lifetime. </p>

      </div>

      <div className="app__aboutus-content_knife flex__center">
        <video controls width="540" height="400">
          <source src={images.knife} type="video/mp4" />
          <track kind="captions" srcLang="en" label="English captions" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Fees</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <div className="app__specialMenu-menu_cocktails  flex__center">
          <div className="app__specialMenu_menu_items">
            {data.nightclubs.map((nightclub, index) => (
              <MenuItem key={nightclub.title + index} title={nightclub.title} price={nightclub.price} tags={nightclub.tags} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
