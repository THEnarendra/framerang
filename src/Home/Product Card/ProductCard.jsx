import React from 'react'
import img from '../../images/anime-character-listening-music.jpg'

const ProductCard = () => {
  return (
    <div class="nft">
    <div class='main'>
<img src={img} alt="" />
<h2 className='creator'>Luffy One Piec</h2>
<p><span style={{textDecoration:"line-through"}}>Rs.50</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.100</p>
<button className='bt1'>Add to Cart</button>

</div>
</div>
  );
}

export default ProductCard
