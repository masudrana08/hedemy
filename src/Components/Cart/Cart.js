import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {
   console.log(props.totalCost);

    return (
        <div className="cart-container">
            <h4 className="order-summary">Order Summary</h4>
            <h6 className="total-order">Total Order : {props.totalEnrolled.length}</h6>
        <h6 className="total-cost">Total Cost : {props.totalCost}$</h6>

        {
            props.totalEnrolled.map(course=>{
                const {title,img,price}=course;
                return(
                    <div className="added-cart">

                        <div className="added-cart-details">
                            <h5 className="added-cart-title">{title}</h5>
                            <h6 className="cart-price">Price: {price}$</h6>
                        </div>
                        <div>
                            <img src={img} alt=""/>
                        </div>


                    </div>
                )
            })
        }
        
        </div>
    );
};

export default Cart;