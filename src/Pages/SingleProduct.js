import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";


const API = "http://localhost:4500/mobiles";
const SingleProduct = () => {
  const { singleProduct, isSingleLoading, getSingleProduct } =
    useProductContext();
  const { id } = useParams();
  console.log(singleProduct);

  const { description ,mobilename} = singleProduct;
  console.log({mobilename})

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  },[]);
  return (
    <>
      <h3>Ayush {id} {mobilename}</h3>
    </>
  );
};

export default SingleProduct;
