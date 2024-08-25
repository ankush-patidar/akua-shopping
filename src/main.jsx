import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Category from './Components/Category/Category.jsx'
import Login from './Components/Login/Login.jsx'
import man_banner from './Components/Assets/banner_mens.png'
import woman_banner from './Components/Assets/banner_women.png'
import ContextProvider from './Context/ContextProvider.jsx'
import Product from './Components/Product/Product.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Cart from './Components/Cart/Cart.jsx'
import LatestCollection from './Components/LatestCollection/LatestCollection.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='' element={<Home />}  />  
        <Route path='/mens' element={<Category banner={man_banner} category='men'/>} />
        <Route path='/womens' element={<Category banner={woman_banner} category='women'/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/latest' element={<LatestCollection/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
