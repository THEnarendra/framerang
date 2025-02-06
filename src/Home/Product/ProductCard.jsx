import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup';
const ProductCard = ({ img, setIsCartOpen }) => {
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const Pop = () => {
    setShowPopup(!showPopup);
  };
  const handleProductClick = () => {
    navigate('/ProductPage', { state: { product: img } })
  }
  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showPopup]);
  return (
    <>
      <div className="nft" >
        {img && (
          <div className='main'>
            <div onClick={handleProductClick} style={{ cursor: 'pointer' }}>
              <img className='image011' src={img.productImage.url} alt="image" />
              <h4 className='creator ps-4 pe-4'>{img.productName}</h4>
            </div>
            <p>
              <span style={{ textDecoration: "line-through", color: "gray" }}>Rs.{img?.variant?.[0]?.oldPrice}</span>
              &nbsp;&nbsp;<span>From:</span>&nbsp;&nbsp;
              <span style={{ fontSize: "22px" }}>Rs.{img?.variant?.[0]?.newPrice}</span>
            </p>
            <button className='bt1' onClick={() => (setId(img._id), Pop())}>Choose Options</button>
          </div>
        )}
      </div>
      {showPopup === true && (
        <div className="modal-popup">
          <Popup setIsCartOpen={setIsCartOpen} img={[img]} id={id} togglePopup={Pop} />
        </div>
      )}
    </>
  );
};
export default ProductCard;
