import React from 'react';

const Cart = (props) => {
  const {cart}=props
// console.log(cart);
  let total=0
  let tax=0
  let shippingCharge=0
  let grandTotal=0
  let quantity=0
  for(const product of cart){
      quantity=quantity+product.quantity
      total+=product.price*product.quantity
      tax=(total*.1).toFixed(2)
     shippingCharge=shippingCharge+product.shipping
     grandTotal=total+parseFloat(tax)+shippingCharge
  }
    return (
        <div>
            <h1 className='mt-5 mb-5 p-5'>Order Summary</h1>
                <div>
                    <small className='mt-5 p-5'>Selected Items:{quantity} </small><br />
                    <small className='mt-5 p-5'>Total Price: ${total}</small><br />
                    <small className='mt-5 p-5'>Total Shipping Charge: ${shippingCharge}</small><br />
                    <small className='mt-5 p-5'>Tax: ${tax}</small><br />
                    <h2 className='mt-4 p-5'>Grand Total: ${grandTotal}</h2>
                </div>
        </div>
    );
};

export default Cart;

