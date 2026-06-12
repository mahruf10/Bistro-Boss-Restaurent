import React, { useState } from 'react';
import { FaAd, FaHome, FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { FaCalendar, FaList, FaUser, FaUtensils } from 'react-icons/fa6';
import { Outlet, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useAdmin from '../shared/useAdmin';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navLink = (to, icon, label) => (
        <li>
            <NavLink
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) => isActive ? 'bg-blue-600' : ''}
                to={to}
            >
                {icon} {label}
            </NavLink>
        </li>
    );

    return (
        <div className='flex'>
            <Helmet>
                <title>Bistro | Dashboard</title>
            </Helmet>

            {/* Mobile top bar */}
            <div className='md:hidden fixed top-0 left-0 right-0 z-50 bg-[#D1A054] flex items-center px-4 py-3'>
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
                <span className='ml-4 font-bold uppercase tracking-wide'>Dashboard</span>
            </div>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className='md:hidden fixed inset-0 bg-black/50 z-40'
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed md:static z-50 top-0 left-0 min-h-screen w-64 bg-[#D1A054] p-2 mt-0 md:mt-4
                transition-transform duration-300
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0
            `}>
                <ul className='menu p-2 space-y-2 mt-12 md:mt-0'>
                    {isAdmin ? <>
                        {navLink('/dashboad/adminHome', <FaHome />, 'ADMIN HOME')}
                        {navLink('/dashboad/additems', <FaUtensils />, 'ADD ITEMS')}
                        {navLink('/dashboad/manageitems', <FaList />, 'MANAGE ITEMS')}
                        {navLink('/dashboad/alluser', <FaUser />, 'ALL USER')}
                    </> : <>
                        {navLink('/dashboad/userHome', <FaHome />, 'MY HOME')}
                        {navLink('/dashboad/reservation', <FaCalendar />, 'RESERVATION')}
                        {navLink('/dashboad/reviews', <FaAd />, 'ADD A REVIEW')}
                        {navLink('/dashboad/paymentHistory', <FaList />, 'PAYMENT HISTORY')}
                        {navLink('/dashboad/cart', <FaShoppingCart />, 'MY CART')}
                    </>}
                </ul>

                <div className='divider'></div>

                <ul>
                    <li><NavLink to='/' className='flex items-center gap-2 ml-4'><FaHome /> HOME</NavLink></li>
                    <li><NavLink to='/ourshop' className='flex items-center gap-2 ml-4 mt-4'><FaSearch /> MENU</NavLink></li>
                </ul>
            </div>

            {/* Main content */}
            <div className='flex-1 p-3 mt-12 md:mt-0'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;