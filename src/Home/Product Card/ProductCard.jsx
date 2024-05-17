import React, { useState, useEffect } from 'react';
import img from '../../images/anime-character-listening-music.jpg';
import Popup from '../Popup';
// Ensure to create and import this CSS file

const ProductCard = ({ img }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('blurred');
    } else {
      document.body.classList.remove('blurred');
    }

    // Cleanup function to remove the blur when the component is unmounted
    return () => {
      document.body.classList.remove('blurred');
    };
  }, [showPopup]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="nft">
        <div className="main">
          <img src={img.img} alt="" />
          <h3 className="creator">{img.productName}</h3>(10*5 inches) <br /> Single pcs
          <p>
            <span style={{ textDecoration: 'line-through', color: 'gray' }}>Rs.{img.oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={{ fontSize: '22px' }}>Rs.{img.price}</span>
          </p>
          <button className="bt1" onClick={togglePopup}>Choose Options</button>
        </div>
      </div>
      {showPopup && (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
          <Popup />
        </div>
      )}
    </>
  );
};

export default ProductCard;
