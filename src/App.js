import logo from './logo.svg';
import './App.css';
import toast, { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider, useNavigate , Navigate } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import NotFound from './Components/NotFound/NotFound';
import {  createContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import CheckOut from './Components/CheckOut/CheckOut';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ImageClick from './Components/ImageClick/ImageClick';
import { CartContextProvider } from './Context/CartContext';
import { Offline, Online } from "react-detect-offline";
import logo3 from '../src/assets/photo-svgg.jpg'
function App() {
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null)
    {
    
saveUserData();

  }

  } , [])
 
const [userData, setUserData] = useState(null)

  function saveUserData() {

   let encodedToken = localStorage.getItem("userToken");
let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
    
  }
  

let routers = createBrowserRouter([
  {
    path: "",
    element:  <Layout setUserData={setUserData} userData={userData} />,
    children: [
      { index: true, element:<ProtectedRoute> <Home /> </ProtectedRoute> },
      { path: "login", element: <Login saveUserData={saveUserData} /> },
      { path: "register", element: <Register /> },
      { path: "products", element:<ProtectedRoute><Products /> </ProtectedRoute> },
      { path: "productdetails/:id", element:<ProtectedRoute><ProductDetails /></ProtectedRoute> },
      { path: "imageclick/:image", element:<ProtectedRoute><ImageClick/></ProtectedRoute> },
      { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: "checkout", element: <ProtectedRoute><CheckOut/></ProtectedRoute> },
      { path: "categories", element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: "brands", element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

  


  return (
    <CartContextProvider>
      <Toaster />
      <RouterProvider router={routers}></RouterProvider>
    
      <Offline> <div className='network bg-toast font-sz p-3 rounded-pill '> Only shown offline (surprise!)</div> </Offline>
    </CartContextProvider>
  );  
  
    

 
};

export default App;
