import React, { useEffect, useState } from 'react'
import styles from './CategorySlider.module.css';
import Slider from "react-slick";
import axios from 'axios';
import photo2 from "../../assets/photo2.png"

export default function CategorySlider() {
    const [categories ,setCategories]=useState([])
const [loading ,setLoading] = useState(false)
    async function getCategories() {
       setLoading(true)
       let { data } = await axios.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
       setCategories(data.data)
    //    console.log(data.data);
        setLoading(false)
       
}

    useEffect(() =>
    {
        getCategories()


    } ,[])
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
        slidesToShow: 7,
        autoplay: true,
     autoplaySpeed: 2000,
    slidesToScroll: 1
  };
    return <>
        <div className="back-slide position-relative py-3">


            <div className="layer-1 position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-center">
                <div className="h-2">
                    <h2></h2>
                    <i className="fa-solid fa-arrow-down fa-bounce pt-3 font-sz"></i>
                    
                </div>

</div>
        </div>
        


        <Slider {...settings}>
            {categories.map((category) => <div className='pt-4 text-center'  key={category._id}>
    
                <img className='w-100' height={200} src={category.image} alt="" />
                <h2 className='h6 pt-2'>{ category.name}</h2>

</div>)}            

          </Slider>
    
        
    
    </>
}
