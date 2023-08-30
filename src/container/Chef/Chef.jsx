import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
        </div>
        <p className="p__opensans">At [Restaurant Name], we believe in more than just creating meals; we believe in crafting experiences that tantalize the senses, ignite conversations, and linger in your memories. Our kitchen is not just a place to cook; it is a haven of inspiration, innovation, and dedication.</p>
      </div>

      <div className="app__chef-sign">
        <p>Alfred Obelle</p>
        <p className="p__opensans">Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
