import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { toast, Toaster } from "react-hot-toast";
import Loader from './Loader';

const Popup = ({ togglePopup, id, img }) => {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const img1 = [img]

  const handleClick = (data) => {
    setLoading(true)
    
    if(data){
      toast.success("Product Added to Cart Succesfully");
      setLoading(false)
      addToCart(data)     
    }
  }
  
  useEffect(()=>{
    if(loading){
      document.body.style.opacity = '0.5';
      document.body.style.pointerEvents = 'none';
    }else{
      document.body.style.opacity = '1';
      document.body.style.pointerEvents = 'auto';
    }
  },[loading])
  return (
    <div className="modal-popup">
{loading && <div className="overlay"><Loader /></div>}

<Toaster />
      {img1.filter((e) => e.id === id).map((data) => (

        <Row style={{ position: "relative" }} className='row1' >
          <span onClick={togglePopup} style={{ position: "absolute", right: "-88%", top: "2%", cursor: "pointer" }}>❌</span>

          <Col style={{ display: "flex", alignItems: "center", flexDirection: "column" }} lg={6}>
            <img className='img12' src={data.productImage.url} alt="" />

           
          </Col>

          <Col style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} lg={6}>


            <span>Framerang</span>
            <h1>{data.productName}</h1>
            <span>10*5 inches </span><br />
            <span>Single pcs</span>
            <div>

              <span style={{ textDecoration: "line-through", color: "gray" }}>Rs. {data.oldPrice}</span>&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "22px" }}>Rs. {data.newPrice}</span><br />
            </div>
            <p>Size</p>
            <div>

              <button className='bt3'>A3</button>

              <button className='bt3 ms-2'>A4</button><br /><br />

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
