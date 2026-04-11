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
import Users from './components/Home/Dashboard/AdminControl/Users.jsx';
import AddItems from './components/Home/Dashboard/AdminControl/AddItems.jsx';
import AdminRoute from './components/Secret/AdminRoute.jsx';
import ManageItem from './components/Home/Dashboard/AdminControl/ManageItem.jsx';
import EditItem from './components/Home/Dashboard/AdminControl/EditItem.jsx';
import Payment from './components/Order/Payment.jsx';
import PaymentHistory from './components/Home/Dashboard/UserControl/PaymentHistory';
import AdminHome from './components/Home/Dashboard/AdminControl/AdminHome.jsx';
import UserHome from './components/Home/Dashboard/UserControl/UserHome.jsx';
import AddReview from './components/Home/Dashboard/UserControl/AddReview.jsx';
import Reservation from './components/Home/Dashboard/UserControl/Reservation.jsx';
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
    path:'/dashboad',
    element:<SecretRouter> <Dashboad></Dashboad> </SecretRouter>
  },
    {
        path:'cart',
        element:<Cart></Cart>
      },
  {
    path:'/dashboad',
    element:<SecretRouter><Dashboad></Dashboad></SecretRouter>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      },
    {
    path:'payment',
    element:<Payment></Payment>
      },{
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },{
    path:'userHome',
    element:<UserHome></UserHome>
      },{
        path:'reviews',
        element:<AddReview></AddReview>
      },{
        path:'reservation',
        element:<Reservation></Reservation>
      },
      // admin Route
      {
        path:'adminHome',
        element:<AdminRoute> <AdminHome></AdminHome></AdminRoute> 
      },
      {
        path:'alluser',
        element: <AdminRoute> <Users></Users></AdminRoute>
      },{
        path:"additems",
        element:<AdminRoute><AddItems></AddItems> </AdminRoute>
      },{
        path:'manageitems',
        element:<AdminRoute> <ManageItem></ManageItem> </AdminRoute>
      },{
        path:'editItem/:id',
        element:<EditItem></EditItem>
      }
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
