import React from 'react';
import '/ManwaVerse/manwaverse/src/App.css'; // Import your stylesheet
import i4 from '/ManwaVerse/manwaverse/src/images/background/sukuna.webp';
import i5 from '/ManwaVerse/manwaverse/src/images/background/sun jin woo.png';

const Body = () => {
  return (
    <div id='main'>
      <div className="image-container" id="4">
        <img src={i4} alt='' />
      </div>
      <div className="image-container" id="5">
        <img src={i5} alt='' />
      </div>
    </div>
  );
}

export default Body;
