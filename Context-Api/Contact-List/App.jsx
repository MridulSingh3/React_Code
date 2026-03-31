import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowContact from './Contact/ShowContact';
import AddContact from './Contact/AddContact';
import EditContact from './Contact/EditContact';
// import ShowContact from './stuPages/showContact';
// import EditStu from './stuPages/EditStu';
// import AddStudent from './stuPages/AddStudent';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowContact />} />
          <Route path='/add' element={<AddContact />} />
          <Route path='/edit/:id' element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
