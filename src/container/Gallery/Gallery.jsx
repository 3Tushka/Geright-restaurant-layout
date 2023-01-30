import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.scss';

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery bg__wrapper" id='gallery'>
      <div className="gallery-info">
        <div className="gallery-info__title">
          <SubHeading title={"Instagram"} />
          <h1 className="headtext__cormorant">Photo Gallery</h1>
        </div>
        <div className="gallery-info__desc">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sint adipisci veniam culpa quaerat, a necessitatibus iste eveniet at tenetur minus. Praesentium voluptatibus, quisquam odit illum nesciunt cumque alias accusantium?</p>
        </div>
        <div className="gallery-info__button">
          <button className="custom__button">View More</button>
        </div>
      </div>
      <div className="gallery-images">
        <div className="gallery-images__container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="gallery-images-card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="gallery-images-arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
