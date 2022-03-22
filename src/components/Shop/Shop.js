import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const[products,setproducts]=useState([])
    const [cart,setCart]=useState([])
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    
    useEffect(()=>{
        const storedCart=getStoreCart()
        const savedCart=[]
       for(const id in storedCart){
           const addedProduct=products.find(pd=>pd.id===id)
           if(addedProduct){
               const quantity=storedCart[id]
               addedProduct.quantity=quantity
               savedCart.push(addedProduct);
           }
       }
       setCart(savedCart)
    },[products])
    const addToCartHandler=(pd)=>{
        let newCart=[]
       const exist=cart.find(product=>product.id===pd.id)
       if(!exist){
           pd.quantity=1
        newCart=[...cart,pd]
       }
       else{
           const rest=cart.filter(product=>product.id!==pd.id)
           exist.quantity=exist.quantity+1
           newCart=[...rest,exist]
       }
       setCart(newCart)
       addToDb(pd.id)
    }
    // console.log(cart);
    return (
        <div className=' row g-1'>
            <div className="product-container col-lg-9 ">
                <div className='row'>
                {
                    products.map(product=><Product key={product.id} pd={product} addToCartHandler={addToCartHandler}></Product>)
                }
                </div>
            </div>
            <div className="cart-details col-lg-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;