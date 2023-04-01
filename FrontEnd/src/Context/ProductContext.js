import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "http://localhost:4500/mobiles";
const API2 = "http://localhost:4600/tablets";
const API3 = "http://localhost:4700/accessories"

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  productsTablet: [],
  productsAccessories: [],
  isSingleLoading: false,
  singleProduct: [{}],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (API) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API);
      const products = res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };
  const getProductsTablets = async (API2) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API2);
      const productsTablet = res.data;
      dispatch({ type: "SET_API_DATA_TABLET", payload: productsTablet });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };
  const getProductsAccessories = async (API3) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API3);
      const productsAccessories = res.data;
      dispatch({ type: "SET_API_DATA_ACCESSORIES", payload: productsAccessories });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };

  //For 2 nd Api for single Porduct

  const getSingleProduct = async (API1) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(API1);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  const getSingleProductTablet = async (API2) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(API2);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT_TABLET", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  const getSingleProductAccessories = async (API3) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(API3);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT_ACCESSORIES", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
    getProductsTablets(API2)
    getProductsAccessories(API3)
  }, []);
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct ,getSingleProductTablet ,getSingleProductAccessories }}>
      {children}
    </AppContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
