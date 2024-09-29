import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from "./pages/index";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)