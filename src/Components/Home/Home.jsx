import React from 'react'
import ItemCard from '../ItemCard/ItemCard';
import all_product from '../Assets/all_product.js';
import Hero from '../Hero/Hero.jsx';
import NewCollections from '../NewCollections/NewCollections.jsx';
import Popular from '../Popular/Popular.jsx';
import NewsLetter from '../NewsLetter/NewsLetter.jsx';

function Home() {
  return (
    <>
      <Hero />
      <div style={{ padding: '2rem' }}>
         <Popular/>
        <NewCollections />
        <NewsLetter />
        {/* {
        all_product.map((item,i) => (
          <ItemCard key={i} id={item.id} image={item.image} name={item.name} category={item.category}/>
        ))
      } */}
      </div>
    </>
  )
}

export default Home