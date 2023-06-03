import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from "../../assets/logo.png"
import Logout from '../Logout/Logout';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';

{/* <img className='w-50' src={logo} alt="" /> */}


export default function Navbar({ userData, logOut }) {

  let { numOfCartItems } = useContext(cartContext);

    return <>
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary  bgNav ">
  <div className="container-fluid ">
    <a className="navbar-brand fresh fs-bold  fs-2 pe-5 " href="#">Fresh<span className='spn-fresh'>~_~</span> Cart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData !== null?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item text-white">
                <Link className="nav-link active text-white fs-bold hover-nav" aria-current="page" to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white hover-nav" aria-current="page" to="products">Products</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active text-white hover-nav" aria-current="page" to="brands">Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white hover-nav" aria-current="page" to="categories">Categories</Link>
        </li>
       
       
       
      </ul>:null}
            
            
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">

              <li className="nav-item text-dark cursor-pointer text-white">
           <i className='fab mx-2 fa-facebook cursor-pointer text-white'></i>
           <i className='fab mx-2 fa-twitter cursor-pointer text-white'></i>
           <i className='fab mx-2 fa-instagram cursor-pointer v'></i>
           <i className='fab mx-2 fa-tiktok cursor-pointer text-white'></i>
           <i className='fab mx-2 fa-linkedin cursor-pointer text-white'></i>
           <i className='fab mx-2 fa-youtube cursor-pointer text-white'></i>
        </li>

              {userData == null ?<>
              <li className="nav-item">
          <Link className="nav-link active px-2 text-white" aria-current="page" to="login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="register">Register</Link>
        </li>
              </> :<>
              <li className="nav-item position-relative">
                <Link className="nav-link active" aria-current="page" to="cart"><i class="fa-solid fa-cart-shopping fa-2x text-white"></i> 
                  <span className=' badge bg-gold position-absolute top-0 end-0 text-dark'>{numOfCartItems}</span></Link>
        </li>
                     <li className="nav-item">
          <span onClick={logOut} className="nav-link active cursor-pointer text-danger" aria-current="page" to="register">Logout</span>
        </li> 
              </>


                
                







                
                
      
         }
              
        
        
      </ul>
     
    </div>
  </div>
</nav>
    </>
}
