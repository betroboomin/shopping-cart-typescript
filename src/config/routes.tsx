import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Shop from "../Pages/Shop";
import { ShoppingCartProvider } from "../Context/ShopinCartContext";
import Navbar from "../Components/Navbar";
export function Routing() {
  return (
    <ShoppingCartProvider>
      
        
    <Navbar />
    <div className="mt-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}
