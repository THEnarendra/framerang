import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../MainCss/CategoryCarousel.css";
import { useProducts } from "../Context/ProductContext";
import { getCategoryImage } from "./CategoryImages"; 
import { toSlug } from "../utils/Slugify"; 

const CategoryCarousel = () => {
    const { categories = [] } = useProducts();
    
    const settings = {
        infinite: true,
        slidesToShow: Math.min(6, categories.length),
        slidesToScroll: 2,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: Math.min(5, categories.length) } },
            { breakpoint: 768, settings: { slidesToShow: Math.min(4, categories.length) } },
            { breakpoint: 480, settings: { slidesToShow: Math.min(3, categories.length) } },
        ],
    };

    return (
        <div className="category-carousel-container">
            <h1 className="m-3 text-center">Shop by Category</h1>
            <hr className="below-line"/>
            {categories.length > 0 ? (
                <Slider {...settings}>
                    {categories.map((category) => (
                        <div key={category} className="category-slide">
                            <Link 
                                to={`/${toSlug(category)}`} 
                                className="category-item"
                            >
                                <div className="category-image-container">
                                    <img 
                                        src={getCategoryImage(category)} 
                                        alt={category}
                                        className="category-image"
                                        onError={(e) => {
                                            e.target.onerror = null; 
                                            e.target.src = 'https://res.cloudinary.com/your-account/image/upload/v1/default-category.jpg';
                                        }}
                                    />
                                </div>
                                <p className="category-name">{category}</p>
                            </Link>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>No categories available</p>
            )}
        </div>
    );
};

export default CategoryCarousel;