import { useEffect } from "react";
import { useContext,useReducer,createContext  } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const cartLocalStorage = () =>{
    const newCartProduct = localStorage.getItem("CartProduct");
    if(newCartProduct === []){
        return []
    }
    else{
        return JSON.parse(newCartProduct)
    }
}

const initialState ={
    cart : cartLocalStorage(),
    total_items : "",
    total_Amount : "",
    shipping_fee : 50000,
}
const CartProvider = ({ children }) => {

    const [state , dispatch] = useReducer(reducer , initialState)

    const addToCart = (id,amount,product) =>{
        dispatch({type : "ADD_TO_CART" , payload : {id,amount,product}})
    }
    const removeItem = (id) =>{
        dispatch({type : "REMOVE_ITEM", payload : id})
    }
    const clearCart = (cart) =>{
        dispatch({type:"CLEAR_CART", payload:cart})
    }


    const setDecrease = (id) =>{
        dispatch({type:"SET_DECREASE", payload:id})
    }
    const setIncrease = (id) =>{
        dispatch({type:"SET_INCREASE", payload:id})
    }



    useEffect(()=>{
        dispatch({type:"SET_CART_QUANTITY"})
        localStorage.setItem("CartProduct" , JSON.stringify(state.cart))
    },[state.cart])

  return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart , setDecrease , setIncrease}}>{children}</CartContext.Provider>;
};

const useCartContext = () =>{
    return useContext(CartContext)
}
export { CartProvider , useCartContext };
