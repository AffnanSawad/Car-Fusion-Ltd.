import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



// React Router :
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/routes';
import AuthProvider from './Authentication/AuthProvider/AuthProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>

{/* Router */}
<div className='bg-black'>

<AuthProvider>

<RouterProvider router={router} />


</AuthProvider>


</div>



  </StrictMode>,
)
