import React from "react";
import { Button } from "react-bootstrap";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <>
      <div style={{
        display:"flex",
        marginTop:"10px",
        alignItems:"center"
      }}>
        <Button className="me-3" onClick={() => setDecrease()} type="button">
          -
        </Button>
        <p className="me-3">{amount}</p>
        <Button onClick={() => setIncrease()} type="button">
          +
        </Button>
      </div>
    </>
  );
};

export default CartAmountToggle;
