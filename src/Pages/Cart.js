import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { useCartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <>
      <div className="container-md">
        <div className="cart-page">
          <p>Items</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div>
          {cart.map((ele) => {
            return (
              <>
                <CartItem key={ele.id} {...ele} />
                <hr />
              </>
            );
          })}
        </div>
        <div
          style={{
            display:"flex",
            justifyContent: "space-between",
            marginBottom: "13px",
          }}
        >
          <div>
            <NavLink to="/mobile">
              <Button>Continue Shopping</Button>
            </NavLink>
          </div>
          <div>
            <Button onClick={() => clearCart(cart)}>Clear Cart</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
