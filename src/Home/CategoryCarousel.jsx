import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../MainCss/CategoryCarousel.css"; // Custom styles
import { useProducts } from "../Context/ProductContext";

const CategoryCarousel = () => {
    const [categories, setCategories] = useProducts();
    console.log(categories);
    const [loading, setLoading] = useState(true);

    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 5 } },
            { breakpoint: 768, settings: { slidesToShow: 4 } },
            { breakpoint: 480, settings: { slidesToShow: 3 } },
        ],
    };

    return (
        <div className="category-carousel">
            <h2>Shop by Category</h2>
            <Slider {...settings}>
                {categories.map((category) => (
                    <Link key={category.slug} to={`/${category}`} className="category-item">
                        <img src={category.image} alt={category.name} />
                        <p>{category.name}</p>
                    </Link>
                ))}
            </Slider>
        </div>
    );
};

export default CategoryCarousel;
