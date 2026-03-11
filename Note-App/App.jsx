import React from 'react'
import NoteApp from './components/NoteApp'
import NoteContainer from './components/NoteContainer'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useState } from 'react'

const App = () => {
  const [notes, setNotes] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteApp notes={notes} setNotes={setNotes} />} />
        <Route path="/notes" element={<NoteContainer notes={notes} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App