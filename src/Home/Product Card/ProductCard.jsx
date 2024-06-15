import React, { useEffect, useState } from 'react'
import Popup from '../Popup';

const ProductCard = ({ img }) => {

  const [id, setId] = useState()

  const [showPopup, setShowPopup] = useState(false);
  const Pop = () => {
    setShowPopup(!showPopup);

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

      <div className="nft">
        {img && (
          <div className='main'>

            <img src={img.productImage.url} alt="" />
            <h3 className='creator'>{img.productName}</h3>( 10*5 inches ) <br /> Single pcs
            <p> <span style={{ textDecoration: "line-through", color: "gray" }}>Rs.{img?.variant?.[0]?.oldPrice}</span>&nbsp;&nbsp;<span>From:</span>&nbsp;&nbsp;<span style={{ fontSize: "22px" }}>Rs.{img?.variant?.[0]?.newPrice}</span> </p>
            <button className='bt1' onClick={() => (setId(img.id), Pop())}>Choose Options</button>

          </div>
        )}

      </div>



      {showPopup === true &&
        <div>

          <Popup img={img} id={id} togglePopup={Pop} />
        </div>
      }

    </>
  );
}

export default ProductCard
