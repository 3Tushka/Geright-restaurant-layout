import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

import './Laurels.scss';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="laurels-awards-card">
    <img src={imgUrl} alt="award" />

    <div className="laurels-awards-card-content">
      <p style={{ color: '#DCCA87' }}>{title}</p>
      <p>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="laurels">
    <div className="laurels-title">
      <SubHeading title={"Awards & Recognitions"} />
      <h1>Our Laurels</h1>

      <div className="laurels-awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>
    <div className="laurels__image">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
