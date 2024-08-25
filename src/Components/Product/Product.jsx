import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { context } from '../../Context/Context'
import Breadcrums from '../Breadcrums/Breadcrums'
import './Product.css';
import RelatedProduct from '../RelatedProduct/RelatedProduct';
function Product() {
    const {all_product} = useContext(context)
    const {productId} = useParams()
    const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <>
        <div>
           <Breadcrums product={product} />
           <RelatedProduct />
        </div>
    </>
  )
}

export default Product