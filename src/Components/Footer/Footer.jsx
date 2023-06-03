import React from 'react'
import styles from './Footer.module.css';

import { Link } from 'react-router-dom';

export default function Footer() {


  return <>

<footer className='bgFooter mt-5'>
        <div className="container">
        <div className="row">
        
          <div className="col-md-3">
            <div className="info-footer">
<h3 className='footer-e'> <span className='spn-fresh fs-2'>E</span> Commerce Shopping </h3>

<h4>electronic</h4>
<h4>cloths</h4>

              <ul  className='  list-unstyled'>
                <li>Phone: 01144290883  </li>
                <li>Email : Omar Sameh</li>
              </ul>
              
              <div className="row">
                <div className="icon-footer d-flex justify-content-center align-items-center mx-2 cursor-pointer hov-footer rounded-circle">
<i className=' fa-brands fa-twitter'></i>

                </div>
                <div className="icon-footer d-flex justify-content-center align-items-center mx-2 cursor-pointer hov-footer rounded-circle">
<i class="fa-brands fa-facebook-f"></i>

                </div>
                <div className="icon-footer d-flex justify-content-center align-items-center mx-2 cursor-pointer hov-footer rounded-circle">
<i className=' fa-brands fa-instagram'></i>

                </div>
                <div className="icon-footer d-flex justify-content-center align-items-center mx-2 cursor-pointer hov-footer rounded-circle">
<i class="fa-brands fa-github"></i>

                </div>
                <div className="icon-footer d-flex justify-content-center align-items-center mx-2 cursor-pointer hov-footer rounded-circle">
<i class="fa-brands fa-linkedin "></i>

                </div>

</div>


            </div>
        </div>
        
          <div className="col-md-3">
            <div className="info-footer">
              <h3 className='footer-e'>UseFull Links</h3>
              <ul className=' list-unstyled ul-footer'>
                <div className="li-fot my-3">

                  <li><i className=' fa-solid fa-angle-right spn-fresh '></i> <Link  to={'/'}> Home</Link> </li>
<li><i className=' fa-solid fa-angle-right spn-fresh'></i> <Link to={'/products'}> Products</Link></li>
<li><i className=' fa-solid fa-angle-right spn-fresh'></i> <Link to={'/brands'}> Brands</Link> </li>
<li><i className=' fa-solid fa-angle-right spn-fresh'></i> <Link to={'/categories'}> Categories</Link> </li>
                </div>
              </ul>   
            </div> 
        </div>
        
          
          <div className="col-md-3">
            <div className="info-footer">
              <h3 className='footer-e'>UseFull Links</h3>
              <ul className=' list-unstyled ul-footer'>
                <div className="li-fot my-3">

                  <li><i className=' fa-solid fa-angle-right spn-fresh '></i> Web Design</li>
<li><i className=' fa-solid fa-angle-right spn-fresh'></i> Web Development</li>
<li><i className=' fa-solid fa-angle-right spn-fresh'></i> Product Management</li>
<li><i className=' fa-solid fa-angle-right spn-fresh'></i> Marketing</li>
                </div>
              </ul>   
            </div> 
        </div>
        
          <div className="col-md-3">
            <div className="info-footer">
              <h3 className='footer-e'>Our NewsLetter</h3>
              
              <p>send us for continuous development</p>
              <div className="input-pos ">
                
              <input className=' form-control rounded-pill input-footer border-0 input-pos' type="text" />

        <button className='ptn-pos btn  rounded-pill'>sub</button>        

</div>
              
</div>
          </div>

        </div>        

        <div className="last-footer w-100 text-center mt-5">

<h4 className='h6'>© copyright <span className=' fs-bold spn-fresh'> E commerce </span>.All right Reserved</h4>

<h4 className='h6'>Thank you for your help </h4>
        </div>


       </div>
      </footer>
    

    
    
           
   
  
    
    </>
}
