import React, { useEffect, useState } from 'react';
import '../MainCss/Product_Slider.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../MainCss/ProductCard.css';
import Popup from './Popup';

const Product_Slider = ({ products,setIsCartOpen }) => {
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

  const filteredProducts = products.filter((product) =>product.isFeatured ===true )
   

  console.log('Filtered Products:', filteredProducts); 

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
        breakpoint: 768, // At 768px or less
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // At 480px or less
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(id);
  return (
    <>
      <div className='ps-3 pe-3' style={{ width: "80vw", border: "1px solid gray", borderRadius: 7 }}>
        <Slider {...settings}>
          
          {
            filteredProducts && filteredProducts.map((img) => (

              <div className="nft" >

                <div className='main' >

                  <img className='image011' src={img.productImage.url} alt="" />
                  <h3 className='creator ps-4 pe-4'>{img.productName}</h3>
                  <p> <span style={{ textDecoration: "line-through", color: "gray" }}>Rs.{img?.variant?.[0]?.oldPrice}</span>&nbsp;&nbsp;<span>From:</span>&nbsp;&nbsp;<span style={{ fontSize: "22px" }}>Rs.{img?.variant?.[0]?.newPrice}</span> </p>
                  <button className='bt1' onClick={() => (setId(img._id), Pop())}>Choose Options</button>

                </div>
              </div>

            ))
          }
        </Slider>

      </div>
      {showPopup === true &&
        <div className="modal-popup">
          <Popup setIsCartOpen={setIsCartOpen} img={filteredProducts} id={id} togglePopup={Pop} />
        </div>
      }
    </>
  );
};

export default Product_Slider;
