import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import{  HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Home/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import Menu from './components/Menu/Menu.jsx';
import OurShop from './components/Order/OurShop.jsx';
import Login from './components/Authentication/Login.jsx';
import SignUp from './components/Authentication/SignUp.jsx';
import AuthProvider from './components/Authentication/AuthProvider.jsx';
import Secret from './components/Secret/Secret.jsx';
import SecretRouter from './components/Secret/SecretRouter.jsx';
import Dashboad from './components/Home/Dashboard/Dashboad';
import Cart from './components/Order/Cart.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'ourmenu',
        element:<Menu></Menu>
      },
      {
        path:'ourshop',
        element:<OurShop></OurShop>
      }
    ],
  }
  ,{
     path:'login',
  element:<Login></Login>
  },{
    path:'register',
    element:<SignUp></SignUp>
  },
  {
    path:'/secret',
    element:<SecretRouter>  <Secret></Secret> </SecretRouter>
  },{
    path:'/dashboad',
    element:<Dashboad></Dashboad>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      },
      // {
      //   path:'home',
      //  element:<Home></Home>
      // }

    ]
  }
]);
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <HelmetProvider>
   <div className='max-w-5xl mx-auto'><RouterProvider router={router} /></div> 
  </HelmetProvider>
    </QueryClientProvider>
      
    </AuthProvider>
  </StrictMode>
)
