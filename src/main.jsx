import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom' // esta supuestamente tiene que star qui debido a instalamos ya las dependencias npi react-router-dom  asegurarse de eso 

import './index.css'
import Home from './Home'
import react from '@vitejs/plugin-react-swc'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Home/>
  </StrictMode>,
)
