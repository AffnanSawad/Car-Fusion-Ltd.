import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



// React Router :
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/routes';



createRoot(document.getElementById('root')).render(
  <StrictMode>

{/* Router */}
<div className='bg-black'>
<RouterProvider router={router} />
</div>



  </StrictMode>,
)
