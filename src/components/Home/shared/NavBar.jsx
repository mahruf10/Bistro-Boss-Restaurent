import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';
import { FaCartShopping } from "react-icons/fa6";
import Swal from 'sweetalert2';
import useCart from './useCart';
import useAdmin from './useAdmin';
const NavBar = () => {
  const [isAdmin]=useAdmin()
  const {user,logOut,loading}=useContext(AuthContext)
  const [cart]=useCart()
  const handleaddtocart=()=>{

  }
  const handlelogout=()=>{
       logOut()
       .then(()=>{
        Swal.fire({
  title: "User Logged out!",
  icon: "success",
  draggable: true
});
       })
  }
  if(loading){
    return <p>Loading.........</p>
  }
  const links=
  <>
  <li><Link to={'/'}>Home</Link></li>
  <li><Link to={'/ourmenu'}>Our Menu</Link></li>
  <li><Link to={'/ourshop'}>Our Shop</Link></li>
  {
    !isAdmin ? <li><Link to={'/dashboad'}>Dashboard</Link></li>: ''
  }
  

   {
      isAdmin ? <> <li><Link to={'/dashboad'}>Dashboard</Link></li> </> : 
      <>  <li>
    <Link to={'/cart'}>
     <button onClick={()=>handleaddtocart()} className="justify-center flex items-center">
  <FaCartShopping /> <div className="badge badge-sm badge-secondary">{cart.length}</div>
</button>
    </Link>
   </li> </>
  }

   {
     user ?
     <><li><button className='justify-center ' onClick={handlelogout}>Logout</button></li>
     </>
    :
    <>
    <li><Link to={'/login'}>Login</Link></li>
    </>
   }
{/*   
  <li><Link to={'/register'}>SignUp</Link></li> */}
  </> 
    return (
        <div>
            <div className="navbar fixed z-10 max-w-5xl  bg-base-100/45 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
   
  </div>

</div>
        </div>
    );
};

export default NavBar;