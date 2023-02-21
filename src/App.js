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


function App() {
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
          <Route path="/singleproduct/:id/:mobilename" element={<SingleProduct />} />
          <Route path="/compareproduct" element={<CompareProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Home />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Scroll />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
