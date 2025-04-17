import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Stripe public key
const stripePromise = loadStripe("pk_test_51QoU1zFR2snOA4SNAmjlu8ik50YsInfdO70oXAHrXiYpROMpoDn0sqofiupeQKuhJwm6kffSMRjVgK4cFXgwCVHx00Og6qfSKf");

function Checkout({ cart }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5252";

    fetch(`${API_BASE}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems: cart }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          console.error("No clientSecret returned:", data);
        }
      })
      .catch((err) => console.error("Payment Intent fetch failed:", err));
  }, [cart]);

  return (
    <div className="container">
      <h2>Checkout</h2>
      <h3>Order Summary</h3>
      <div className="contained-btn">
        {cart.map((item, index) => (
          <div key={index}>
            {item.name} - R{item.price}
          </div>
        ))}
      </div>
      <h3>Total: R{cart.reduce((total, item) => total + item.price, 0)}</h3>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
}

function PaymentForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      setPaymentStatus("Stripe is not ready or clientSecret is missing.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        setPaymentStatus(error.message);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        setPaymentStatus("Payment successful!");
      }
    } catch (err) {
      setPaymentStatus(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay Now</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </form>
  );
}

export default Checkout;
