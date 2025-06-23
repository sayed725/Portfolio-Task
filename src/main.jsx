import { StrictMode } from 'react'
import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import Router from './routes/Router.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
   <Router />
  </BrowserRouter>
  // </StrictMode>,
)
