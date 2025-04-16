/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
function Cart({ cart, clearCart }) {
    const navigate = useNavigate();

    const handleProceedToCheckout = () => {
        navigate("/checkout");
    };

    return (
        <>
            <div className="container contained-btn">
                <h1>Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index}>
                                        {item.name} - R{item.price}
                                    </li>    
                                ))}
                            </ul>  
                            
                                <button className="contained-btn" onClick={handleProceedToCheckout} disabled={cart.length === 0}>Proceed to Checkout
                                </button>
                                <button className="contained-btn" onClick={clearCart}>Clear Cart</button> 
                    </>   
                )}  
            </div>
        </>       
    );
}

export default Cart; 