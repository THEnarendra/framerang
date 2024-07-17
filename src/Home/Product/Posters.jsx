import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';
import { Col, Row } from 'react-bootstrap';

export const Posters = ({ img, setFooter, theme, subCategory, details, setIsCartOpen }) => {
  setFooter(true);

  const [selectedSubCategory, setSelectedSubCategory] = useState('Select SubCategory');
  const [filteredImg, setFilteredImg] = useState(img);


  const handleSubCategoryChange = (e) => {
    setSelectedSubCategory(e.target.value);
  };

  useEffect(() => {
    if (selectedSubCategory === 'Select SubCategory') {
      setFilteredImg(img);
    } else {
      setFilteredImg(img.filter(item => item.subCategory === selectedSubCategory));
    }
  }, [selectedSubCategory, img]);

  const settings = {
    dots: true,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    arrows: false,
  };


  return (
    <div className='mb-5' style={{
      marginTop: "72px",
      padding: "3%", textAlign: "center",
    }}>
      {details?.map((data) => (
        <Slider {...settings}>
          {data.images.map((e) => (

            <img src={e.url} alt="" className='logo_wheel12' />
          ))}


        </Slider>
      ))}


      <Row  style={{ margin: "1% 6% 5% 6%" }}>
        <div className='ms-2 mt-5 mb-5' style={{ display: "flex", flexWrap: "wrap" }}>
          <div className='me-4 d-flex align-items-center'>
            <span className='me-4'>Filter:</span>
            <select
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
              style={{ color: theme === "darkTheme" ? "white" : "black" }}
              className='Category_Row'
            >
              <option
                key={subCategory}
                value="Select SubCategory"
                style={{ backgroundColor: theme === "darkTheme" ? "black" : "white" }}
              >Select SubCategory</option>
              {subCategory && subCategory.map((subCategory) => (

                <option
                  key={subCategory}
                  value={subCategory}
                  style={{ backgroundColor: theme === "darkTheme" ? "black" : "white" }}
                  className='Category '
                >
                  {subCategory}
                </option>
              ))}
            </select>

          </div>
        </div>
        
        {filteredImg &&
          (
            filteredImg.map((img) => (
              <Col style={{padding:6}} lg={3} md={4} sm={12} key={img.id}>
                <ProductCard setIsCartOpen={setIsCartOpen} img={img} />
              </Col>
            ))
          )}
      </Row>
    </div>
  );
};
