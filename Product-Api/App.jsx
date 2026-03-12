import React from 'react'
import ProductStore from './components/ProductStore';

const App = () => {
  const api = "https://fakestoreapi.com/products";
  return (
    <ProductStore api={api} />
  )
}

export default App
