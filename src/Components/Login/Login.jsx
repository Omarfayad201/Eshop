import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import styles from './Login.module.css';
import * as Yup from 'yup'
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({saveUserData}) {



    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false)

    const [messageError, setMessageError] = useState('')
    
   async function handleLogin(values) {
    setIsLoading(true)
       let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`, values).catch((err) =>{
           setIsLoading(false)
           setMessageError(`${err.response.data.errors.param} : ${err.response.data.errors.msg}`)
            
       })
  
       if (data.message === 'success')
       {
           localStorage.setItem('userToken', data.token)
           saveUserData()
    setIsLoading(false)
           navigate('/')
       }

    }
    let validationSchema = Yup.object({
        email:Yup.string().required('Email is required').email("Email is invalid"),
        password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/ , 'password must start with uppercase A-Z and lowercase a-z 4 letters and number '),
    })

    

    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: handleLogin
    })
    return <>
        <div className="w-75 mx-auto py-4">

            <h3>Login Now :</h3>
            {messageError?<div className="alert alert-danger">{messageError}</div>:null}
            
            <form onSubmit={formik.handleSubmit}>
                

                <label htmlFor="email">Email :</label>
                <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" />
                {formik.errors.email && formik.touched.email?<div className="alert alert-danger">{formik.errors.email}</div>:null}


                <label htmlFor="password">Password :</label>
                <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" />
                {formik.errors.password && formik.touched.password?<div className="alert alert-danger">{formik.errors.password}</div>:null}


                {isLoading ? <button type='button' className='btn bg-main text-white'><i className='fas fa-spinner fa-spin'></i></button> :
                <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Login</button>
                }
                


                
</form>

        </div>
    
    </>
}
