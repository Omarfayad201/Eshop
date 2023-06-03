import React, { useContext } from 'react'
import styles from './CheckOut.module.css';
import { useFormik } from 'formik';
import { cartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export default function CheckOut() {
    let { onlinePayment , cartId} = useContext(cartContext);

    async function handleSubmit(values) {

        let response = await onlinePayment(cartId , values);
        if (response?.data?.status === 'success') {
         window.location.href =  response.data.session.url  
        }
        console.log();
    console.log(response);
}

    let formik = useFormik({
        initialValues: {
            details: '',
            city: '',
            phone:'',
        },
        onSubmit:handleSubmit

    })

  

// btn()
   
    return <>
        <div className=" w-50 py-5 mx-auto">
            <form onSubmit={formik.handleSubmit}>
<label htmlFor="details">Details :</label>
<input className=' form-control mb-3' value={formik.values.details} onChange={formik.handleChange} type="text" name="details" id="details" />
          
<label htmlFor="city">city :</label>
<input className=' form-control mb-3' value={formik.values.city} onChange={formik.handleChange} type="text" name="city" id="city" />
          
<label htmlFor="phone">phone :</label>
<input className=' form-control mb-3' value={formik.values.phone} onChange={formik.handleChange} type="tel" name="phone" id="phone" />
          
          <button type='submit' className='btn bgNav w-100'>pay</button>
          
            </form>
            
            
            
  </div>
    
    </>
}
