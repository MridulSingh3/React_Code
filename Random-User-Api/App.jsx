import React from 'react'
import RandomUser from './components/RandomUser';

const App = () => {
  const api = "https://randomuser.me/api/?results=5";
  return (
    <RandomUser api={api} />
  )
}

export default App
