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

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/tablet" element={<Tablet />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Scroll />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
