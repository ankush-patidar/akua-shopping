import React from 'react'
import { Link } from 'react-router-dom';

import './ItemCard.css';
function ItemCard(props) {
  return (
    <div>
      <div className='item'>
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt='image' onClick={window.scrollTo(0,0)} />
        </Link>
        <p>{props.name}</p>
        <div className='item-prices'>
          <div className='item-price-new'>
            ${props.new_price}
          </div>
          <div className='item-price-old'>
            ${props.old_price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard