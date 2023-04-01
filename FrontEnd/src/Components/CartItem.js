import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/CartContext"; 
import { Button } from "react-bootstrap";

const CartItem = ({ id, mobilename, image, amount, price ,max }) => {

    const {removeItem , setDecrease , setIncrease } = useCartContext();

  return (
    <>
      <div className="">
        <div className="cart-page">
        <div>
          <img src={image} alt={id} />
        </div>
        <div>
          <p>{price}</p>
        </div>
        <div>
          <CartAmountToggle
            amount={amount}
            setDecrease={()=>setDecrease(id)}
            setIncrease={()=>setIncrease(id)}
          />
        </div>
        <div>{price * amount}</div>
        <div>
          <FaTrash style={{cursor:"pointer"}} onClick={()=>removeItem(id)} />
        </div>
        </div>
        
      </div>
    </>
  );
};

export default CartItem;
