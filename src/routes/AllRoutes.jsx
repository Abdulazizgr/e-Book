import React from 'react'
import {Routes , Route} from 'react-router-dom'
import { CartPage, HomePage,ProductDetail,ProductsList}  from '../pages';

const AllRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/cart" element= {<CartPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
     </Routes>
    </div>
  ) 
}

export default AllRoutes
