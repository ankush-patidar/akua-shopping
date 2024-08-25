import React from 'react'
import "./RelatedProduct.css"
import "../Popular/Popular.css"
import data_product from '../Assets/data'
import ItemCard from '../ItemCard/ItemCard'
function RelatedProduct() {
    return (
        <div className='popular related-product-container'>
            <h1>Related Products</h1>
            <hr />
            <div className='popular-item'>
                {data_product.map((item, i) => {
                    return <ItemCard key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProduct