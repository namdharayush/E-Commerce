import { Button } from "react-bootstrap";
import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";

import { useCartContext } from "../Context/CartContext";

const AddToCart = ({product}) => {
    const {addToCart} = useCartContext()
    const {id,stock}=product
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {

    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };


  return (
    <>
      <div>
        <div
        onClick={()=>addToCart(id,amount,product)}
        >
          <Button className="mt-2" type="submit">
            Add To Cart
          </Button>
        </div>
      </div>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
    </>
  );
};

export default AddToCart;
