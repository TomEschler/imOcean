import React, { useState } from 'react';
import ImageOne from './images/education1.png'
import ImageTwo from './images/facebookBlack.png'
import ImageThree from './images/facebookOrange.png'
import ImageFour from './images/instaBlack.png'
import ImageFive from './images/instaOrange.png'
import ImageSix from './images/title.png'
import ImageSeven from './images/twitterBlack.png'
import ImageEight from './images/twitterOrange.png'
import './CSS/Carousel.css'


const Carousel = () => {
  const [ images, setImages ] = useState([
    ImageOne, ImageThree, ImageFour, ImageSix ,ImageFive, ImageSeven, ImageEight, ImageTwo
  ]);

  const [ currentImageIdx, setCurrentImagIdx ] = useState(0);

  const prevSlide = () => {
    const resetToVeryBack = currentImageIdx === 0;
    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {

    const resetIndex = currentImageIdx === images.length - 1;
    const index = resetIndex ? 0 : currentImageIdx + 1;

    setCurrentImagIdx(index);
  }

  const activeImageSourcesFromState = images.slice(currentImageIdx, currentImageIdx + 5);

  const imageSourcesToDisplay = activeImageSourcesFromState.length < 5

    ? [...activeImageSourcesFromState, ...images.slice(0, 5 - activeImageSourcesFromState.length) ]
    : activeImageSourcesFromState;

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Prev</button>
      {imageSourcesToDisplay.map((image, index) =>
        <img key={index} src={image} style={index === 2 ? {height: '200px' , width: 'auto'} : {height: '120px' , width: '120px'} } />
      )}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;