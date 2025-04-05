import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Col, Row, Container, Badge } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { Toaster, toast } from "react-hot-toast";
import "./ProductPage.css";

export const ProductPage = ({ setFooter, setIsCartOpen }) => {
  const location = useLocation();
  const { product } = location.state || {};
  const { addToCart } = useContext(CartContext);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    // Validate variant selection
    if (product.hasVariants) {
      const missingVariants = product.variants.filter(
        variant => !selectedOptions[variant.variantName]
      );
      
      if (missingVariants.length > 0) {
        setError(`Please select ${missingVariants.map(v => v.variantName).join(' and ')}`);
        return;
      }

      // Check stock
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

  return (
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
      </Container>
    </div>
  );
};