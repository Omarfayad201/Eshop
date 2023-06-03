import React, { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.css';
import { cartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
export default function Cart() {
    let { getLoggedUserCart , removeItem , updateProductCount , clearCart ,setNumOfCartItems} = useContext(cartContext);
    const [cartDetails, setCartDetails] = useState(null)
    const [loading, setLoading] = useState(false);
    const[isLoading , setIsLoading] =useState(false)
    async function getCart() {
        setLoading(true);
        let response = await getLoggedUserCart()
        setLoading(false)
        //    console.log(response);

       if (response?.data?.status === "success")
       {
           setCartDetails(response.data.data);
         
       }
    }

   async function deleteItem(productId) {
    
       let response = await removeItem(productId);
       setCartDetails(response.data.data);
       setNumOfCartItems(response.data.numOfCartItems)
  toast("product removed" ,{className:'bg-toast'})
console.log(response);

}

   async function updateProductQuantity(productId , count) {
    setIsLoading(true)
       let response = await updateProductCount(productId, count);
       setIsLoading(false)
    
       setCartDetails(response.data.data);
     
       
  toast("product is update" ,{className:'bg-toast'})
// console.log(response);

    }



   useEffect(() => {
        getCart();
   }, []);
    
    return <>
        {loading ==true?<div className="loading-page d-flex justify-content-center align-items-center  bg-dark position-absolute top-0 start-0 end-0 bottom-0 ">
<h1>loading... </h1>
<i className='fas fa-spinner fa-spin fs-1'></i>
                </div>:null}
        {cartDetails? <div className="p-4 my-4">
<h3>Shop cart : </h3>
            <h6 className='fs-bold'>Total Cart Price : <span className='text-price'>{cartDetails?.totalCartPrice} EGP</span></h6>
            <button  className='btn '><i className='fa fa-trash'></i> Clear Cart</button>
           
          
            {cartDetails.products.map((product) => <div key={product.product._id} className='row my-3 align-items-center border-bottom  py-2'>
                    
                <div className="col-md-1">
                    <img className=' w-100' src={product.product.imageCover} alt="" />
                </div>
                <div className="col-md-11  d-flex justify-content-between">
                    <div className="price-product">
                         <h6>{product.product.title}</h6>
                        <h6 className='text-price'>Price : {product.price} EGP </h6>
                        <button onClick={()=>deleteItem(product.product._id)} className='btn p-0 m-0 remove-btn'><i className=' fa-regular fa-trash-can '></i> Remove</button>
                    </div>
                    <div className="counter-product">
                        {isLoading ? <button type='button' className='btn bg-ptn-dark text-white'><i className='fas fa-spinner fa-spin'></i></button>
                            : <>
                            <button onClick={() => updateProductQuantity(product.product._id, product.count + 1)} className='btn border-plus btn-sm text-white'>+</button>
                        <span className='mx-2 text-white fs-bold'>{ product.count}</span>
                        <button onClick={()=>updateProductQuantity(product.product._id , product.count-1)} className='btn border-minus btn-sm text-white'>-</button>
                         </>}
                        </div>
 
                </div>
            </div>)}
            <button className='btn bg-ptn-dark w-100'>
            <Link to={"/checkout"}>Checkout</Link>
            </button>
        </div> :null}
    
    
    
    </>
}
