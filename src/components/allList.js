import React, { useEffect, useState } from 'react'

export const Productlist=()=>{
    const [products,setProducts]=useState('')

    useEffect(()=>{
        getproducts()
    },[])
    const getproducts=async()=>{
        let result=await fetch('http://localhost:5999/products')
        result=await result.json()
        setProducts(result)
        
    }
    
    console.log("products",products)
   
    return(
        <div className='product-list' >
        <h3>E-Productlist </h3>
        <ul>
        
            <li>S no.</li>
            <li>name</li>
            <li>category</li>
            <li>price</li>
        </ul>
        {
           
        }
        
            
    

        </div>
    )
}