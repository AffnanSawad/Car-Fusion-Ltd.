import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
import auth from "../../../Authentication/firebase/firebase.config";
import Swal from "sweetalert2";

const Navbar = () => {

   
  const {user , LogOut} = useContext(AuthContext)
  
   const navigate = useNavigate()

    //  Nav Options 

    const NavOptions = <>  
    
    
        <li className="hover:text-orange-300 uppercase"><Link to='/'>Home</Link></li>
        <li className="hover:text-orange-300 uppercase"><Link to='/aboutus'> About Us  </Link></li>
        <li className="hover:text-orange-300 uppercase"><Link to='/collections'> Collections </Link></li>
         
       <li className="hover:text-orange-300 uppercase"><Link to='/sellcar'>  Sell Car </Link></li>
         


       <li className="hover:text-orange-300 uppercase"><Link to='/contact'> Contact Us </Link></li>                  
       <li className="hover:text-orange-300 uppercase"><Link to='/showroom'> ShowRoom </Link></li> 
    
    
    
    
    </>



  
//  Handle LogOut 

const handle_LogOut = () => {

  LogOut(auth)

  .then(() => {

    console.log("log out successfully");

    // navigate
    navigate('/');
    
    // swal
    Swal.fire({
      title: "  Logged Out!",
      text: "You Are Successfully Logged Out!",
      icon: "success"
    });
})

.catch(error=>{
    console.log(error.message)
})
}










    return (
        <div>
            <div className="navbar fixed z-20 bg-opacity-50 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black text-white  rounded-box z-[1] text-xl mt-3 w-52 p-2 shadow hover:text-orange-200">
        
      {NavOptions}




      </ul>
    </div>
   
    <img className="w-[120px]" src="https://i.ibb.co.com/XwM2HjX/images.png" alt="" srcset="" />

  </div>
  <div className="navbar-center  hidden  lg:flex ">
    <ul className="menu menu-horizontal px-1  text-xl">
     
      


       {NavOptions}


    </ul>
  </div>
  <div className="navbar-end">
  

 {
  user ?
  <div className="flex items-center text-white">
  <p className="hidden sm:block mr-4">{user.email}</p>
  <button
    onClick={handle_LogOut}
    className="btn bg-red-600 text-white border border-red-600 hover:bg-red-700"
  >
    Log Out
  </button>
</div>
  :
  <Link to="/login"><button className="btn  btn-warning mr-10">Log In</button>
  </Link>
 }
 


  </div>
</div>
        </div>
    );
};

export default Navbar;