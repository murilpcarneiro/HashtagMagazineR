import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Checkout from './pages/CheckoutPage/Checkout'
import Home from './pages/HomePage/Home'
import PurchaseHistory from './pages/PurchaseHistoryPage/PurchaseHistory'
import { CartContext } from './contexts/CartContext'
import { useState } from 'react'


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/history' element={<PurchaseHistory />} />
      </Routes>
    </CartContext.Provider>
  )
}

export default App
