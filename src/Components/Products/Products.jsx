import React from 'react'
import styles from './Products.module.css';
import { useContext } from 'react';
import { counterContext } from '../../Context/CounterContext';

export default function Products() {
    // let { userName , increaseCounter ,decreaseCounter} = useContext(counterContext);

    return <>
        
        <h2>Products counter </h2>
    
        {/* <button onClick={increaseCounter} className='btn btn-info'>+</button>
        <button onClick={decreaseCounter} className='btn btn-danger'>-</button> */}
    </>
}
