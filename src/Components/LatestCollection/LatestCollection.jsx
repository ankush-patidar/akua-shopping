import React from 'react'
import './LatestCollection.css'
import all_product from '../Assets/all_product'
import ItemCard from '../ItemCard/ItemCard'
import hero_image from '../Assets/hero_image.png'
import coming_soon from '../Assets/coming_soon.jpg'
function LatestCollection() {
    return (
        <div className='latest-collection-container'>
            <div latest-collection-image>
                <img src={coming_soon} />
            </div>
        </div>

    )
}

export default LatestCollection