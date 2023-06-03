import React, { useContext, useEffect, useState } from 'react'
import styles from './FeaturedProducts.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';



export default function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    let {addToCart , setNumOfCartItems}= useContext(cartContext);

  async function addProduct(productId)
    {
      let response = await addToCart(productId);
      if (response?.data?.status === "success") {
          setNumOfCartItems(response.data.numOfCartItems);
          
          toast.success(response.data.message, { duration: 4000, className: 'bg-toast' })  
          
      }
      else {
         toast.error(response.data.message ,{duration:4000 , className:'bg-toast'})  
          
     }
       console.log(response);

  }

    
    const [loading, setLoading] = useState(false);
    async function getProducts() {
       setLoading(true)
       let { data } = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products`)
       setProducts(data.data)
    //    console.log(data.data);
        setLoading(false)
       
    }
    
    const Component = (props) => {
    
        useEffect(() => {
            
            
        })
}
  

  
//   function btn() {
//     let btn = document.querySelector(".a-a");
//     btn.addEventListener ('mousemove', (e) => {
//       let rect = e.target.getBoundingClientRect();
//       let x = e.clientX - rect.left;
//       btn.style.setProperty("--x", x + "deg");
//     });
//   }



    useEffect(() =>
    {
        getProducts()

// btn()
    }, [])
    
    return <>
        <div className="container my-5">
            {loading == true? <div className="loading-page d-flex justify-content-center align-items-center  bg-dark position-absolute top-0 start-0 end-0 bottom-0 ">
<h1>loading... </h1>
<i className='fas fa-spinner fa-spin fs-1'></i>
                </div>:<div className="row position-relative ">
                    {products.map((product) => <div key={product._id} className="col-md-2 col-sm-3 gx-5 gy-3">

                        <div className="info-products text-center shadow-main hover-item overflow-hidden ">
                            <Link to={`/productdetails/${product._id}`}>
                    <img className='w-100' src={product.imageCover} alt="" />
                    <div className="prg my-3">
                                    <span className='fs-bold py-3 h-1'>{product.brand.name}</span>
                    <h2 className='h5 h-1'>{product.title.split(" ").slice(0 ,2).join(" ")}</h2>
                    </div>
                    <div className=" d-flex justify-content-between">
                        <span className='h5 fs-bold'>{ product.price} EGP</span>
                        <span> <i className='fas fa-star rating '></i> {product.ratingsAverage} </span>

                                </div>
                                
                            </Link>
                                <button onClick={()=>addProduct(product._id)}  className='btn-color rounded-3 text-white w-100'>+ Add</button>
                            {/* <button  onMouseMove={()=> btn()} className='a-a btn btn-color' href="#">
                <i></i><i></i>

<span>add+</span>
</button> */}



                </div>
                </div>)}
                

            </div>}







   </div>
    
    </>
}
