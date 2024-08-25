import React, { useContext, useState } from 'react'
import { cartItemContext } from '../../Context/Context'
import './CartBill.css';
function CartBill(props) {


    const priceItems = [0];
    priceItems.push(props.productItems.map((item) => (item.new_price)));
    const price = priceItems[1].reduce((accumulator, currentValue) => (accumulator + currentValue))

    return (
        <div className='cart-bill-container'>
            <div className='cart-total-heading'>
                <h4>Cart Totals</h4>
            </div>
            <div className='cart-bill-items'>
                <p><span>Items : </span> <span>{priceItems[1].length}</span></p>
                <hr />
            </div>
            <div className='cart-bill-shipping'>
                <p><span>Shipping Fee</span><span>Free</span></p>
                <hr />
            </div>

            <div className='cart-bill-total'>
                <h4><span>Total : </span><span> ${price}</span></h4>
            </div>

        </div>
    )
}

export default CartBill