import { Link } from "react-router-dom";

const Navbar = () => {




    //  Nav Options 

    const NavOptions = <>  
    
    
        <li className="hover:text-orange-200 uppercase"><Link to='/'>Home</Link></li>
        <li className="hover:text-orange-200 uppercase"><Link to='/aboutus'> About Us  </Link></li>
        <li className="hover:text-orange-200 uppercase"><Link to='/collections'> Collections </Link></li>
        <li className="hover:text-orange-200 uppercase"><Link to='/sellcar'>  Sell Car </Link></li>
       <li className="hover:text-orange-200 uppercase"><Link to='/contact'> Contact Us </Link></li>                  
       <li className="hover:text-orange-200 uppercase"><Link to='/location'> ShowRoom </Link></li> 
    
    
    
    
    </>










    return (
        <div>
            <div className="navbar bg-black text-white">
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
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <img className="w-[120px]" src="https://i.ibb.co.com/XwM2HjX/images.png" alt="" srcset="" />

  </div>
  <div className="navbar-center  hidden  lg:flex ">
    <ul className="menu menu-horizontal px-1  text-xl">
     
      


       {NavOptions}


    </ul>
  </div>
  <div className="navbar-end">
  
  <Link to="/login"><button className="btn btn-outline btn-warning mr-10">Log In</button>
  </Link>


  </div>
</div>
        </div>
    );
};

export default Navbar;