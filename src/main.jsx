import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom' // esta supuestamente tiene que star qui debido a instalamos ya las dependencias npi react-router-dom  asegurarse de eso 

import './index.css'
import { enrutador } from './router/enrutador'// algo muy importante que entender del enrutador





createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={createBrowserRouter(enrutador)}/>
  </StrictMode>,
)
