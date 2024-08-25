import React, { useContext } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import { context  } from '../../Context/Context'
import './Category.css';
function Category(props) {
  const { all_product } = useContext(context);
  return (
    <>
      <div style={{ padding: '2rem' }}>
        <img src={props.banner} width='100%' />
      </div>
      <div className='card'>
        {
          all_product.map((item, i) => {
            if (item.category === props.category) {
              return <ItemCard key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
          })
        }
      </div>
    </>
  )
}

export default Category