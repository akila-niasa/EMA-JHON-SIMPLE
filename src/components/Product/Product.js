import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import { Button, Card } from 'react-bootstrap';
import './Product.css'

const Product = (props) => {
    const{addToCartHandler}=props
    // console.log(props.pd);
    const {img,name,price,seller,ratings}=props.pd
    return (
       <div  data-aos="fade-up" className='col-lg-4  my-1'>
             <Card className='p-2'>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Title>Price: ${price}</Card.Title>

      <Card.Text>
      <small className="text-muted">Manufacturer : {seller}</small>
      <br />
      <small className="text-muted">Rating :{ratings}</small>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button  onClick={()=>addToCartHandler(props.pd)} className="text-light w-100 "  data-bs-toggle="button" autocomplete="off">Add to Cart<FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></Button>
      
    </Card.Footer>
  </Card>

       </div>  
        
    )
}

export default Product;