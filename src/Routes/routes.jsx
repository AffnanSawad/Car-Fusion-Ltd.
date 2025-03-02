import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import ContactUs from "../AllPages/ContactUs/ContactUs";
// import Home from "../AllPages/Home/Home/Home";



 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main>  </Main>,

      children: [

    {
        path : '/',
        element : <Home></Home>
    },
    {
      path: '/contact',
      element: <ContactUs></ContactUs>
    }


      ]
    },
  ]);