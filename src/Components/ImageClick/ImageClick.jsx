import React, { useState } from 'react'
import styles from './ImageClick.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Slider from "react-slick";

export default function ImageClick() {
    const [imageClick, setImageClick] = useState(null)
    const [loadingImage, setLoadingImage] = useState(false)
    let params = useParams();

    async function getImage(image) {
       setLoadingImage(true)
       let { data } = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${image}`)  
        setImageClick(data.data)  
    setLoadingImage(false)    
}

    useEffect(() => {
    
    getImage(params.image)
    
    }, [])
    


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
     autoplay: false,
    autoplaySpeed: 1000,
     speed: 1000,
  fade: true,
  };



    return <>
    
        <div className="container mt-5">
            {loadingImage == true ? <div className="loading-page d-flex justify-content-center align-items-center bg-dark  position-absolute top-0 start-0 end-0 bottom-0 ">
<h1>loading... </h1>
<i className='fas fa-spinner fa-spin fs-1'></i>
                </div>:
                
                <div className="image-click position-relative">
                    <Slider {...settings}>
                        {imageClick?.images.map((img , ind )=> <div key={ind} className="col-md-9 d-flex justify-content-center align-items-center"><img key={ind} src={img} /></div> ) }
                           </Slider>
                       
                          
                    


                <Link to={'/'}>
              <div className="icon position-absolute top-0 end-0 ps-1 cursor-pointer">
                    <i className="fa-regular fa-circle-xmark text-black"></i>
            </div>      
            </Link>
    </div>

                

                 
                
        
        
}
            
            
    </div>
    </>
}
