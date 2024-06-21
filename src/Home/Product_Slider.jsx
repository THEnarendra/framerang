import React from 'react';
import '../MainCss/Product_Slider.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './Product Card/ProductCard';
import '../MainCss/ProductCard.css';

const Product_Slider = ({ products, category, isFeatured }) => {
  
  const filteredProducts = products.filter(product => {
    if (category && isFeatured !== undefined) {
      return product.category === category && product.isFeatured === isFeatured;
    } else if (category) {
      return product.category === category;
    } else if (isFeatured !== undefined) {
      return product.isFeatured === isFeatured;
    }
    return true;
  });

  console.log('Filtered Products:', filteredProducts); // Log filtered products

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // At 1024px or less
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

  return (
    <div className='ps-3 pe-3' style={{ width: "80vw", border: "1px solid gray", borderRadius: 7 }}>
      <Slider {...settings}>
        {filteredProducts.length === 0 ? (
          <div>No products available</div>
        ) : (
          filteredProducts.map((product) => {
            console.log('Product:', product); // Log each product
            return (
              <div className='p-2' key={product._id}>
                <ProductCard img={product} />
              </div>
            );
          })
        )}
      </Slider>
    </div>
  );
};

export default Product_Slider;
