import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


function App() {
    
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const clearCart = () => {
        setCart([]);
    };

    return(
        <Router>
            <Navbar cartCount= {cart.length}/>
            <main>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/shop" element={<Shop addToCart={addToCart} />} /> 
                    <Route path="/gallery" element={<Gallery />} /> 
                    <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} />} />
                    <Route path="/checkout" element={<Checkout  cart={cart} />} />  
                </Routes>
            </main>   
            <Footer />
        </Router>    
    );
}

export default App;