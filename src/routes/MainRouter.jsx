import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import ItemDetails from '../pages/ItemDetails'
import NavBarComponent from '../components/NavBar/NavBarComponent'


const MainRouter = () => {
  return (
    <Router>
    <NavBarComponent />
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/item/:itemId" element={<ItemDetails />} />            
        </Routes>
    </Router>
  )
}

export default MainRouter