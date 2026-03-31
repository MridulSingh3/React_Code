import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { StudentProvider } from './pages/StudentMangement';
import { ContactProvider } from './Context/CreateContext';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactProvider>
      <App />
    </ContactProvider>
  </StrictMode>,
)
