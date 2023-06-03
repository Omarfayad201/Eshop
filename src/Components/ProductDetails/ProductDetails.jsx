import React, { useState} from 'react'
import styles from './ProductDetails.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Slider from "react-slick";

export default function ProductDetails() {

    const [productDetails, setProductDetails] = useState(null);
    const [loadingProductsDetails, setLoadingProductsDetails] = useState(null)
    
    let params = useParams();


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
     autoplay: true,
    autoplaySpeed: 2000,
     speed: 1000,
  fade: true,
  };



    // console.log(params.id);
 async  function getProductsDetails(id){
    setLoadingProductsDetails(true)
        let {data} =await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
      setProductDetails(data.data)
      setLoadingProductsDetails(false)
}

    useEffect(()=> {
        getProductsDetails(params.id)

    },[])
    return <>
        



     <div className="container ">
            {loadingProductsDetails==true ?
        <div className="loading-page d-flex justify-content-center align-items-center bg-dark  position-absolute top-0 start-0 end-0 bottom-0 ">
<h1>loading... </h1>
<i className='fas fa-spinner fa-spin fs-1'></i>
                </div>:
        <div className="row py-3 align-items-center text position-relative">
                    <div className="col-md-4">
                        
                        <Link to={`/imageclick/${productDetails?._id}`}>
                            <Slider {...settings}>
                                {productDetails?.images.map((img , ind)=> <img key={ind} src={img} />) }
                            </Slider>
                     {/* <img className='w-100' src={productDetails?.imageCover} alt="" /> */}
               </Link>
            </div>
            <div className="col-md-7 mt-3">
                
                <h3>{productDetails?.title}</h3>
                <p>{productDetails?.description}</p>
                
<div className=" d-flex justify-content-between ">
                        <span className='h5 fs-bold'>{ productDetails?.price} EGP</span>
                        <span> <i className='fas fa-star rating '></i> {productDetails?.ratingsAverage} </span>

                                </div>
                                <button className='btn btn-color text-white w-100 mb-5'>+Add</button>

            </div>

</div>
        }

    

        </div>
        
    </>
}
