import React from 'react'
import {Routes , Route} from 'react-router-dom'
import { CartPage, HomePage,ProductsList}  from '../pages';

const AllRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/cart" element= {<CartPage />} />
     </Routes>
    </div>
  )
}

export default AllRoutes
