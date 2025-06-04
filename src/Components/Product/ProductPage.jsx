import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Col, Row, Container, Badge } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { Toaster, toast } from "react-hot-toast";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../Product/ProductCard";
import "./ProductPage.css";
import { Helmet } from 'react-helmet-async';

export const ProductPage = ({ setFooter, setIsCartOpen }) => {
  const location = useLocation();
  const { product, relatedProducts } = location.state || {};
  const { addToCart } = useContext(CartContext);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [popupProduct, setPopupProduct] = useState(null);

  // Initialize variant selections
  useEffect(() => {
    if (product?.hasVariants) {
      const initialOptions = {};
      product.variants.forEach(variant => {
        if (variant.options?.length > 0) {
          const firstInStockOption = variant.options.find(opt => opt.stock > 0);
          if (firstInStockOption) {
            initialOptions[variant.variantName] = firstInStockOption;
          }
        }
      });
      setSelectedOptions(initialOptions);
    }
    setFooter(false);
  }, [product, setFooter]);

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (!product) {
    return (
      <Container className="text-center my-5">
        <p>Product not found</p>
      </Container>
    );
  }

  const handleOptionSelect = (variantName, option) => {
    if (option.stock <= 0) return;
    
    setSelectedOptions(prev => ({
      ...prev,
      [variantName]: option
    }));
    setError(null);
  };

  const calculateDisplayPrice = () => {
    if (!product.hasVariants) return product.basePrice;
    
    return Object.values(selectedOptions).reduce(
      (total, option) => total + option.price.newPrice, 
      product.basePrice || 0
    );
  };

  const calculateOriginalPrice = () => {
    if (!product.hasVariants) return product.basePrice;
    
    return Object.values(selectedOptions).reduce(
      (total, option) => total + option.price.oldPrice, 
      product.basePrice || 0
    );
  };

  const handleAddToCart = () => {
    if (product.hasVariants) {
      const missingVariants = product.variants.filter(
        variant => !selectedOptions[variant.variantName]
      );
      
      if (missingVariants.length > 0) {
        setError(`Please select ${missingVariants.map(v => v.variantName).join(' and ')}`);
        return;
      }

      const outOfStockVariant = Object.values(selectedOptions).find(
        opt => opt.stock <= 0
      );
      if (outOfStockVariant) {
        setError('Selected option is out of stock');
        return;
      }
    }

    const cartItem = {
      ...product,
      selectedVariant: product.hasVariants 
        ? Object.entries(selectedOptions).map(([name, option]) => ({
            variantName: name,
            value: option.value,
            price: option.price.newPrice,
            stock: option.stock
          }))
        : null
    };

    addToCart(cartItem);
    setIsCartOpen(true);
    toast.success("Added to cart");
  };

  const displayPrice = calculateDisplayPrice();
  const originalPrice = calculateOriginalPrice();
  const hasDiscount = originalPrice > displayPrice;

  const handleOpenPopup = (product) => {
    setPopupProduct(product);
  };

  const handleClosePopup = () => {
    setPopupProduct(null);
  };

    const createSlug = (text) => {
    if (!text) return '';
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')     // Spaces to hyphens
      .replace(/[^\w-]+/g, '')  // Remove non-word chars
      .replace(/--+/g, '-')     // Replace multiple hyphens
      .trim();                  // Trim whitespace
  };

  const currentUrl = window.location.href; // Gets the actual visited URL
  const categorySlug = createSlug(product?.category || '');
  const subCategorySlug = createSlug(product?.subCategory || '');
  const productSlug = createSlug(product?.productName || '');

  return (
    <>
     <Helmet>
    <title>{product.productName} | Frame Rang</title>
    <meta 
      name="description"
      content={`${product.productName} - ${product.description?.substring(0, 160)}`} 
    />
    <meta 
      name="keywords" 
      content={`${product.productName}, custom frames, ${product.category}, poster frames, Frame Rang`} 
    />
    <link rel="canonical" href={currentUrl} />
    
    {/* Open Graph (for social sharing) */}
    <meta property="og:title" content={`${product.productName} | Frame Rang`} />
    <meta property="og:description" content={product.description?.substring(0, 160)} />
    <meta property="og:image" content={product.productImages[0]?.url} />
    <meta property="og:url" content={currentUrl} />
    <meta property="og:type" content="product" />

      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.productName,
        "description": product.description,
        "image": product.productImages.map(img => img.url),
        "brand": {
          "@type": "Brand",
          "name": "Frame Rang"
        },
        "offers": {
          "@type": "Offer",
          "url": currentUrl,
          "priceCurrency": "INR",
          "price": displayPrice,
          "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          "itemCondition": "https://schema.org/NewCondition",
          "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        }
      })}
    </script>
    
  </Helmet>


    <div className="product-page-wrapper">
      <Toaster position="bottom-right" />
      <Container fluid>
        <Row className="g-4">
          {/* Product Images */}
          <Col lg={6}>
            <div className="main-image-container">
              <img
                src={product.productImages[currentImageIndex]?.url}
                alt={product.productName}
                className="main-product-image"
                loading="lazy"
              />
            </div>
            <div className="thumbnail-container">
              {product.productImages.map((img, index) => (
                <button
                  key={img.public_id}
                  className={`thumbnail-btn ${currentImageIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={img.url}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail-image"
                  />
                </button>
              ))}
            </div>
          </Col>

          {/* Product Details */}
          <Col lg={6} className="product-details">
            <div className="details-container">
              <Badge bg="secondary" className="product-brand">
                Framerang
              </Badge>
              
              <h1 className="product-title">{product.productName}</h1>
              
              <div className="price-container">
                {hasDiscount && (
                  <span className="original-price">
                    Rs. {originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="current-price">
                  Rs. {displayPrice.toLocaleString()}
                </span>
                {hasDiscount && (
                  <span className="discount-badge">
                    {Math.round((originalPrice - displayPrice) / originalPrice * 100)}% OFF
                  </span>
                )}
              </div>
              
              <p className="shipping-info">
                Tax included. Shipping calculated at checkout
              </p>

              {/* Variant Selection */}
              {product.hasVariants && product.variants.map(variant => (
                <div key={variant.variantName} className="variant-section">
                  <h3 className="variant-title">{variant.variantName}</h3>
                  <div className="variant-options-grid">
                    {variant.options.map(option => {
                      const isSelected = selectedOptions[variant.variantName]?.value === option.value;
                      const isOutOfStock = option.stock <= 0;
                      
                      return (
                        <button
                          key={`${variant.variantName}-${option.value}`}
                          className={`variant-option 
                            ${isSelected ? 'selected' : ''}
                            ${isOutOfStock ? 'out-of-stock' : ''}
                          `}
                          onClick={() => !isOutOfStock && handleOptionSelect(variant.variantName, option)}
                          disabled={isOutOfStock}
                          aria-pressed={isSelected}
                          aria-label={`${option.value} ${isOutOfStock ? 'out of stock' : ''}`}
                        >
                          {option.value}
                          {isOutOfStock && <span className="stock-label">Sold out</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {error && (
                <div className="error-message" role="alert">
                  {error}
                </div>
              )}

              <button
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={product.hasVariants && Object.keys(selectedOptions).length !== product.variants.length}
              >
                Add to Cart
              </button>

              <div className="product-description">
                <h3>Description</h3>
                <p>{product.description || 'No description available.'}</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Related Products Section */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div className="related-products-section">
            <h3 className="section-title">You May Also Like</h3>
            <div className="related-products-slider">
              <Slider {...sliderSettings}>
                {relatedProducts.map((product) => (
                  <div key={product._id} className="slider-item">
                    <ProductCard 
                      product={product}
                      setIsCartOpen={setIsCartOpen}
                      onOpenPopup={handleOpenPopup}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </Container>
    </div>
    </>
  );
};