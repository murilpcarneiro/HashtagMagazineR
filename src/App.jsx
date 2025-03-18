import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Checkout from './pages/CheckoutPage/Checkout'
import Home from './pages/HomePage/Home'
import PurchaseHistory from './pages/PurchaseHistoryPage/PurchaseHistory'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/history' element={<PurchaseHistory />} />
      </Routes>
    </>
  )
}

export default App
