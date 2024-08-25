import React, { useContext } from 'react'
import { cartItemContext } from '../../Context/Context'
import { useState } from 'react';
import CartBill from '../CartBill/CartBill';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import './Cart.css';
function Cart() {
    const { addToCart } = useContext(cartItemContext)
    const { setAddTocart } = useContext(cartItemContext);
    let [removeAlertShow, setRemoveShow] = useState(false);

    if (addToCart.length === 0) return (<div className='cart-not-added'> <p>Cart Item Not Added !</p></div>)
    // const [items,setItems] = useState(addToCart);

    // let billPrice= addToCart.map((item)=>item.new_price)
    const handleremoveCartItem = (batch) => {
        setAddTocart((preValue) => addToCart.filter((preTodos) => preTodos.batch != batch))
        // setRemoveCart(batch);
        setRemoveShow(true)
        setTimeout(() => {
            setRemoveShow(false)
        }, '3000')
    }

    return (
        <div className='cartItems' style={{ position: 'relative' }}>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <hr />
            <div style={{ position: 'absolute', top: '-1.4rem', right: '1rem' }}>
                {removeAlertShow && <div >
                    <Alert variant="filled" severity="success" sx={{ bgcolor: '#d32f2f', color: '#fff' }}>
                        Product Removed
                    </Alert>
                </div>
                }
            </div>
            {
                addToCart.map((item, i) => (
                    <div>
                        <div className='cartitems-format' key={i}>
                            <img src={item.image} alt='cart-image' />
                            <div className='cart-item-product-title'> <p>{item.itemName}</p></div>
                            <p className='cart-product-price'>${item.new_price}</p>
                            <p className='cart-category'>Category: {item.category}</p>
                            <div style={{ cursor: 'pointer' }} onClick={() => handleremoveCartItem(item.batch)}><CloseIcon /></div>
                        </div>
                        <hr />
                    </div>
                ))
            }
            <hr />
            <CartBill productItems={addToCart} />

            {/* <h4> Name:{addToCart.name}</h4>
            <h4>Batch : {addToCart.id} </h4> */}
        </div>
    )

}

export default Cart