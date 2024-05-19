import React, { useState } from 'react'
import img from '../../images/anime-character-listening-music.jpg'
import Popup from '../Popup';

const ProductCard = ({img}) => {

const [id, setId]= useState()

const [showPopup, setShowPopup] = useState(false);
  const Pop=()=>{
    setShowPopup(!showPopup);
   
  }

  return (
<>
    <div className="nft">
    <div className='main'>
<img src={img.img} alt="" />
<h3 className='creator'>{img.productName}</h3>( 10*5 inches ) <br/> Single pcs 
<p><span style={{textDecoration:"line-through",color:"gray"}}>Rs.{img.oldPrice}</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"22px"}}>Rs.{img.price}</span> </p>
<button className='bt1' onClick={()=>(setId(img.id), Pop())}>Choose Options</button>

</div>
</div>
{showPopup===true&&
<div>

  <Popup img={img} id={id} togglePopup={Pop}/>
</div>
  }
</>
  );
}

export default ProductCard
