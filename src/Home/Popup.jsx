import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { toast, Toaster } from "react-hot-toast";
import Loader from './Loader';
import '../MainCss/Popup.css'
import { useNavigate } from 'react-router-dom';
const Popup = ({ togglePopup, id, img, setIsCartOpen }) => {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleMoreDetails = (data) => {
    navigate('/ProductPage', { state: { product: data } });
  };
  const handleClick = (data) => {
    if (selectedVariant === null) {
      setError(true)
    }
    else {
      setLoading(true);
      togglePopup();
      setIsCartOpen(true)
      if (data) {
        const productWithSelectedVariant = {
          ...data,
          Size: selectedVariant?.size,
        };
        setTimeout(() => {
          toast.success("Product Added to Cart Successfully");
          setLoading(false);
          addToCart(productWithSelectedVariant);
        }, 100);
      }
    }
  };
  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };
  useEffect(() => {
    if (loading) {
      document.body.style.opacity = '0.5';
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.opacity = '1';
      document.body.style.pointerEvents = 'auto';
    }
  }, [loading]);
  useEffect(() => {
    if (img.variant && img.variant.length > 0) {
      setSelectedVariant(img.variant[0]);
    }
  }, [img]);
  return (
    < >
      {loading && <div className="overlay"><Loader /></div>}
      <Toaster />
      {img?.filter((e) => e._id === id).map((data) => (
        <Row className='row1'>
          <span onClick={togglePopup} className='btPopup'>❌</span>
          <Col style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }} lg={6}>
            <img className='img12' src={data.productImage.url} alt="" />
          </Col>
          <Col style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} lg={6}>
            <span>Framerang</span>
            <h1>{data.productName}</h1>
            <span>Single pcs</span>
            <div className='mt-2'>
              {selectedVariant && (
                <>
                  <span style={{ textDecoration: 'line-through', color: 'gray' }}>
                    Rs. {selectedVariant.oldPrice}
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ fontSize: '22px' }}>Rs. {selectedVariant.newPrice}</span>
                </>
              )}
            </div>
            <p>Size:</p>
            <div>
              {data?.variant?.map((variant) => (
                <button
                  key={variant._id}
                  className={`bt3 me-3 ${selectedVariant === variant ? 'selected' : ''}`}
                  onClick={() => (handleVariantClick(variant), setError(false))}
                >
                  {variant.size}
                </button>
              ))}
              <br />
              <br />
              {error && (
                <p style={{ color: "red" }}>! Please Select Size First </p>
              )}
            </div>
            <div className='d-flex'>
              <button onClick={() => (handleClick(data))} className='bt4'>ADD TO CART</button>
              <button onClick={() => handleMoreDetails(data)} className='bt4 ms-2'>MORE DETAILS</button>
            </div>
            <br /><br />
          </Col>
        </Row>
      ))}
    </>
  )
}
export default Popup
