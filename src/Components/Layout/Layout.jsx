import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';

export default function Layout({ userData, logOut  ,setUserData}) {
       let navigate = useNavigate();
    
    function logOut() {
localStorage.removeItem("userToken");
    setUserData(null);
         navigate('/login');

}

    return <>
        <div className="py-5">

          <Navbar setUserData={setUserData } logOut={logOut}  userData={userData} />
        <Outlet></Outlet>
        <Footer/>  
        </div>
        
    </>
}
