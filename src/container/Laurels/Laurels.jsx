import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="laurels-container app__bg app__wrapper section__padding">
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="The center piece" />
        <h1 className="headtext__cormorant">Our Event Hall</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
        </div>
      </div>
      <video className="app__laurels_video" controls width="600" height="500">
        <source src={images.hall} type="video/mp4" />
        <track kind="captions" srcLang="en" label="English captions" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="laurels-images">
      <img src={images.hall1} alt="laurels_img" width={500} height={500} />
      <img src={images.hall2} alt="laurels_img" width={500} height={500} />
    </div>
  </div>
);

export default Laurels;
