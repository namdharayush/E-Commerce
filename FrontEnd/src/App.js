import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from "./Pages/Home";
import Mobile from "./Pages/Mobile";
import Tablet from "./Pages/Tablet";
import Accessories from "./Pages/Accessories";
import Scroll from "./Components/Scroll";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SingleProduct from "./Components/SingleProduct";
import CompareProduct from "./Pages/CompareProduct";
import Cart from "./Pages/Cart";
import Payment from "./Components/Payment";
import Text from "./Components/Text";
import SingleProductTablet from "./Components/SingleProductTablet";
import { useEffect } from "react";
import SingleProductAccessories from "./Components/SingleProductAccessories";
import Log from "./Pages/Log";
import Reg from "./Pages/Reg";


function App() {

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
     document.body.appendChild(script);
   });
};

useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
});


  return (
    <>
      <BrowserRouter basename="/E-Commerce">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/tablet" element={<Tablet />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/log-in" element={<Login />} />
          {/* <Route path="/login" element={<Log />}/>
          <Route path="/reg" element = {<Reg />} /> */}
          <Route path="/singleproduct/:id/:mobilename" element={<SingleProduct />} />
          <Route path="/singleproducttablets/:id/:mobilename" element={<SingleProductTablet />} />
          <Route path="/singleproductaccessories/:id/:mobilename" element={<SingleProductAccessories />} />
          <Route path="/compareproduct" element={<CompareProduct />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="*" element={<Home />} /> */}
          <Route path="/cart" element={<Cart />}/>
          <Route path="/payment/:id/:mobilename" element={<Payment />} />
          <Route path="/welcome" element={<Text />} />
        </Routes>
        <Scroll />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
