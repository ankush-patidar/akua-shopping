import React, { useContext, useState } from 'react'
import { cartItemContext } from '../../Context/Context';
import Alert from '@mui/material/Alert';
import './Breadcrums.css';
import star_icon from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png'

function Breadcrums(props) {
  const { product } = props;
  let [show, setShow] = useState(false);
  const { setAddTocart } = useContext(cartItemContext)
  const handleAddToCart = () => {
    setAddTocart((preValue) => {
      return [...preValue, { batch: product.id, itemName: product.name, category: product.category, image: product.image, new_price: product.new_price }]
    },
      setShow(true),

      setTimeout(() => {
        setShow(false)
      }, '5000')
    );
    // console.log(product);
  }


  return (
    <div className='breadcrums-container'>
      <div className='images-breadcrums'>
        <div className='small-images'>
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>
        <div className='long-images'>
          <img src={product.image} />
        </div>
      </div>
      <div className='breadcrums-left'>
        {show && <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <Alert variant="filled" severity="success">
            Product Added
          </Alert>
        </div>
        }

        <p className='product-name'>{product.name}</p>
        <div className='star-section'><img src={star_icon} /><img src={star_icon} /><img src={star_icon} /><img src={star_icon} /><img src={star_dull} /><span>(122)</span></div>
        <p className='breadcrums-price'><span style={{ textDecoration: 'line-through', color:'#8c8c8c'}}>${product.old_price}</span> <span style={{ color: '#ff4141' }}>${product.new_price}</span></p>
        <p>A lightweight, usually knitted, pulover shirt, close-fiting and with a round neckline,and short sleeves, warn as an undershirt or outer garment</p>
        <button className='add-cart-button' onClick={handleAddToCart}>Add To Cart</button>
        <p><b>Category :</b> {product.category}</p>
      </div>
    </div>
  )
}

export default Breadcrums