import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { toast, Toaster } from "react-hot-toast";
import Loader from './Loader';
import '../MainCss/Popup.css'

const Popup = ({ togglePopup, id, img }) => {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const img1 = [img]

  const handleClick = (data) => {
    setLoading(true);
    
    if (data) {
        const productWithSelectedVariant = {
            ...data,
            Size: selectedVariant.size, 
        };
        console.log(selectedVariant.size);
        toast.success("Product Added to Cart Successfully");
        setLoading(false);
        addToCart(productWithSelectedVariant);   
    }
  };


  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };

  useEffect(()=>{
    if(loading){
      document.body.style.opacity = '0.5';
      document.body.style.pointerEvents = 'none';
    }else{
      document.body.style.opacity = '1';
      document.body.style.pointerEvents = 'auto';
    }
  },[loading]);

  useEffect(() => {
    if (img.variant && img.variant.length > 0) {
      setSelectedVariant(img.variant[0]);
    }
  }, [img]);


  return (
    <div className="modal-popup">
{loading && <div className="overlay"><Loader /></div>}

<Toaster />
      {img1?.filter((e) => e.id === id).map((data) => (

        <Row style={{ position: "relative" }} className='row1' >
          <span onClick={togglePopup} style={{ position: "absolute", right: "-88%", top: "2%", cursor: "pointer" }}>❌</span>

          <Col style={{ display: "flex", alignItems: "center", flexDirection: "column",justifyContent:"center" }} lg={6}>
            <img className='img12' src={data.productImage.url} alt="" />
           
          </Col>

          <Col style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} lg={6}>


            <span>Framerang</span>
            <h1>{data.productName}</h1>
            <span>10*5 inches </span><br />
            <span>Single pcs</span>
            <div>
                {selectedVariant && (
                  <>
                    <span style={{ textDecoration: 'line-through', color: 'gray' }}>
                      Rs. {selectedVariant.oldPrice}
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span style={{ fontSize: '22px' }}>Rs. {selectedVariant.newPrice}</span>
                  </>
                )}
                <br />
              </div>
            <p>Size</p>
            <div>
                {data?.variant?.map((variant) => (
                  <button
                    key={variant._id}
                    className={`bt3 me-3 ${selectedVariant === variant ? 'selected' : ''}`}
                    onClick={() => handleVariantClick(variant)}
                  >
                    {variant.size}
                  </button>
                ))}
                <br />
                <br />
              </div>
            <button onClick={() => handleClick(data)} className='bt4'>ADD TO CART</button>
            <br /><br />

          </Col>
        </Row>
      ))}
    </div>
  )
}

export default Popup
