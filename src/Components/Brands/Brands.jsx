import React, { useEffect, useState } from 'react'
import styles from './Brands.module.css';
import axios from 'axios';

export default function Brands() {
const [brands, setBrands] = useState([])
const [loadingBrands, setLoadingBrands] = useState(false)
   async function getBrands() {
    setLoadingBrands(true)
        let { data } =await axios.get(`https://route-ecommerce.onrender.com/api/v1/brands`)
       setBrands(data.data)
    //    console.log(data.data);
       setLoadingBrands(false)
    }
    useEffect(()=> {
        
getBrands()

    },[])


    return <>
        
        <div className="container">

            
            {loadingBrands == true? <div className="loading-page d-flex justify-content-center align-items-center bg-dark  position-absolute top-0 start-0 end-0 bottom-0 ">
<h1>loading... </h1>
<i className='fas fa-spinner fa-spin fs-1'></i>
                </div>: <div className="row position-relative">
                {brands.map((brand) => <div key={brand._id} className='col-md-3 my-2 text-center'>
<img className='w-100' src={brand?.image} alt="" />
                    <h3>{ brand?.name}</h3>
                </div>)}

            </div> }


            

    </div>
    
    </>
}
