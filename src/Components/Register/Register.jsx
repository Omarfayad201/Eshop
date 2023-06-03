import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import styles from './Register.module.css';
import * as Yup from 'yup'
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
const [messageError, setMessageError] = useState('')
   async function handleRegister(values) {
    setIsLoading(true)
       let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`, values).catch((err) =>{
           setIsLoading(false)
           setMessageError(`${err.response.data.errors.param} : ${err.response.data.errors.msg}`)
          
          
       })
  
       if (data.message === 'success')
       {
    setIsLoading(false)
           navigate('/login')
       }

    }
    let validationSchema = Yup.object({
        name:Yup.string().required('Name is required').min(3,'Name minLength is 3').max(10 , 'Name maxLength is 10'),
        email:Yup.string().required('Email is required').email("Email is invalid"),
        password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/ , 'password must start with uppercase A-Z and lowercase a-z 4 letters and number '),
        rePassword:Yup.string().required('rePassword is required').oneOf([Yup.ref('password')] , 'password and rePassword doesnt match'),
        phone:Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/ , 'phone must be valid Number'),
    })

    // function validate(values) {
    //     let errors = {};

    //     if (!values.name) {
    
    //         errors.name = 'Name is Required'
    //     }    
    //     else if (values.name.length < 3) {
    //         errors.name = 'Name minLength is 3'
    //     }
    //     else if (values.name.length > 10) {
    //         errors.name = 'Name maxLength is 10'
    //     }



    //     if (!values.email) {
    
    //         errors.email = 'email is Required'
    //     }    
    //     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = 'email is invalid'
    //     }
        


    //     if (!values.password) {
    
    //         errors.password = 'password is Required'
    //     }    

    //     else if (!/^[A-Z][a-z0-9]{5,9}$/i.test(values.password)) {
    //         errors.password = 'password must start with uppercase A-z and lowercase a-z and Number 1,2,3...'
    //     }

    //     if (!values.rePassword) {
    
    //         errors.rePassword = 'rePassword is Required'
    //     }    

    //     else if (values.Password !== values.rePassword) {
    //         errors.rePassword = 'password and rePassword is Not match'
    //     }


    //     if (!values.phone) {
    
    //         errors.phone = 'phone is Required'
    //     }    

    //     else if (!/^01[0125][09]{8}$/.test(values.phone)) {
    //         errors.phone = 'phone must be Valid with egyption phone Number'
    //     }
        

    //     return errors;
    // }

    let formik = useFormik({
        initialValues: {
            name: '',
            phone:'',
            email: '',
            password: '',
            rePassword:'',
        },
        validationSchema,
        onSubmit: handleRegister
    })
    return <>
        <div className="w-75 mx-auto py-4">

            <h3>register Now :</h3>
            {messageError?<div className="alert alert-danger">{messageError}</div>:null}
            
            <form onSubmit={formik.handleSubmit}>
                
                <label htmlFor="name">Name :</label>
                <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.name} type="text" name="name" id="name" />
                {formik.errors.name && formik.touched.name?<div className="alert alert-danger">{formik.errors.name}</div>:null}
               

                <label htmlFor="email">Email :</label>
                <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" />
                {formik.errors.email && formik.touched.email?<div className="alert alert-danger">{formik.errors.email}</div>:null}


                <label htmlFor="password">Password :</label>
                <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" />
                {formik.errors.password && formik.touched.password?<div className="alert alert-danger">{formik.errors.password}</div>:null}


                <label htmlFor="rePassword">rePassword :</label>
                <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.rePassword} type="password" name="rePassword" id="rePassword" />
                {formik.errors.rePassword && formik.touched.rePassword?<div className="alert alert-danger">{formik.errors.rePassword}</div>:null}

                <label htmlFor="phone">Phone :</label>
                <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" id="phone" />
                {formik.errors.phone && formik.touched.phone?<div className="alert alert-danger">{formik.errors.phone}</div>:null}

                {isLoading ? <button type='button' className='btn bg-main text-white'><i className='fas fa-spinner fa-spin'></i></button> :
                <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Register</button>
                }
                


                
</form>

        </div>
    
    </>
}
