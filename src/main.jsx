import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Routers from './router/index.jsx'
import './i18n'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routers />
    </BrowserRouter>
  </StrictMode>,
)
