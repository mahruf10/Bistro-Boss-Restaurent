import React from 'react';
import { FaAd, FaHome, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FaCalendar, FaList } from 'react-icons/fa6';
import { Outlet ,NavLink} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Dashboad = () => {
    return (
        <div className='flex'>
              <Helmet>
                     <title>Bistro| Dashboard</title>
                       </Helmet>
            <div className='w-64 min-h-screen p-2 bg-[#D1A054] mt-4'>
         <ul className='menu p-2 space-y-2'>
            <li>
                <NavLink className={({isActive})=> isActive ?'bg-blue-600':''} to={'/dashboad/home'}><FaHome></FaHome> MY HOME</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> isActive ?'bg-blue-600':''} to={'/dashboad/reservation'}><FaCalendar></FaCalendar>RESERVATION</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> isActive ?'bg-blue-600':''} to={'/dashboad/reviews'}><FaAd></FaAd> ADD A REVIEW</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> isActive ?'bg-blue-600':''} to={'/dashboad/bookings'}><FaList></FaList> BOOKINGS</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> isActive ?'bg-blue-600':''} to={'/dashboad/cart'}><FaShoppingCart></FaShoppingCart> MY CART</NavLink>
            </li>
         </ul>
         <div className='divider'>
         </div>
         <ul>
        <li><NavLink to='/' className='flex items-center gap-2 ml-4'> <FaHome></FaHome> HOME</NavLink> </li>
        <li><NavLink to='/ourshop' className='flex items-center gap-2 ml-4 mt-4'> <FaSearch></FaSearch> MENU</NavLink> </li>
         </ul>
        
            </div>
            <div className='flex-1 p-3'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboad;