import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import { ProductProvider } from './context/ContextProduct';
import Wishlist from './pages/Wishlist';
import { ToastContainer } from 'react-toastify';

const App = () => {

  function DashBoard() {
    return <Home />;
  }

  return (
    <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/whislist' element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App;