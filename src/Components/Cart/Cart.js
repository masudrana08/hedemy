import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {
   console.log(props.totalCost);

    return (
        <div className="cart-container">
            <h3 className="order-summary">Order Summary</h3>
            <h4 className="total-order">Total Order : {props.totalEnrolled.length}</h4>

        {
            props.totalEnrolled.map(course=>{
                const {title,img,price}=course;
                return(
                    <div className="added-cart">

                        <div className="added-cart-details">
                            <h5>{title}</h5>
                            <h4 className="cart-price">Price: {price}$</h4>
                        </div>
                        <div>
                            <img src={img} alt=""/>
                        </div>


                    </div>
                )
            })
        }
        <h4 className="total-cost">Total Cost : {props.totalCost}$</h4>
        </div>
    );
};

export default Cart;