import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Create payment intent route
app.post("/create-payment-intent", async (req, res) => {
    const { cartItems } = req.body;

    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0) * 100;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalAmount,
            currency: "zar",
            automatic_payment_methods: { enabled: true },
        });

        console.log("PaymentIntent Client Secret:", paymentIntent.client_secret);

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Dynamic port for cloud deployment
const PORT = process.env.PORT || 5252;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`);
});
