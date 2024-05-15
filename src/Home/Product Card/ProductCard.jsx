import React from 'react'
import img from '../../images/anime-character-listening-music.jpg'

const ProductCard = () => {
  return (
    <div class="nft">
    <div class='main'>
<img src={img} alt="" />
<h3 className='creator'>Luffy One Piece || Matte Finish Poster </h3>( 10*5 inches ) <br/> Single pcs 
<p><span style={{textDecoration:"line-through",color:"gray"}}>Rs.50</span>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"22px"}}>Rs.100</span> </p>
<button className='bt1'>Add to Cart</button>

</div>
</div>
  );
}

export default ProductCard
