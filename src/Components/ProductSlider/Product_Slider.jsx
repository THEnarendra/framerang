import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../Product/ProductCard';
import './ProductSlider.css';
import Popup from '../Popup/Popup';

const Product_Slider = ({ products, setIsCartOpen }) => {
  const [popupProduct, setPopupProduct] = useState(null);
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleOpenPopup = (product) => {
    setPopupProduct(product);
  };

  const handleClosePopup = () => {
    setPopupProduct(null);
  };

  return (
    <>
      <div className='ps-3 pe-3 product-slider-container'>
        <Slider {...settings}>
          {products && products.map((product) => (
            <div key={product._id}>
              <ProductCard 
                img={product} 
                setIsCartOpen={setIsCartOpen}
                onOpenPopup={handleOpenPopup}
              />
            </div>
          ))}
        </Slider>
      </div>

      {popupProduct && (
        <div className="modal-popup">
          <Popup 
            setIsCartOpen={setIsCartOpen} 
            img={[popupProduct]} 
            id={popupProduct._id} 
            togglePopup={handleClosePopup} 
          />
        </div>
      )}
    </>
  );
};

export default Product_Slider;