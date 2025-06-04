import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ img, setIsCartOpen, onOpenPopup }) => {
  const navigate = useNavigate();
  
  const category= img?.category || '';
  const subCategory = img?.subCategory || '';
  // Generate URL-friendly slug
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

  const handleProductClick = () => {
    if (!img?.productName || !category || !subCategory) return;
    
    navigate(
      `/${createSlug(category)}/${createSlug(subCategory)}/${createSlug(img.productName)}`,
      { state: { product: img } }
    );
  };

  const handleOptionsClick = (e) => {
    e.stopPropagation();
    onOpenPopup(img);
  };

  return (
    <div className="nft" onClick={handleProductClick}>
      {img && (
        <div className='main' style={{ cursor: 'pointer' }}>
          <div className="image-container">
            <img 
              className='image011' 
              src={img.productImages[0]?.url || 'https://via.placeholder.com/150'} 
              alt={img.productName} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150';
              }}
            />
          </div>
          
          <div className="text-content">
            <h4 className='creator' title={img.productName}>
              {img.productName}
            </h4>
            
            <p className="price-text mb-0">
              {img?.hasVariants ? (
                <>
                  <span>Starting from: </span>
                  <br />
                  <span className='product-card-price'>
                    Rs.{Math.min(
                      ...img.variants.flatMap(v => 
                        v.options.map(opt => opt.price.newPrice)
                    ))}
                  </span>
                </>
              ) : (
                <>
                  <span>Price: </span>
                  <span className='product-card-price'>Rs.{img.basePrice}</span>
                </>
              )}
            </p>            
            <button 
              className='bt1' 
              onClick={handleOptionsClick}
            >
              Choose Options
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;