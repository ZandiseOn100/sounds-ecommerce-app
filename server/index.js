import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

dotenv.config({ path: './.env' });

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running!");
});

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

app.listen(5252, () => {
    console.log("Server started on http://localhost:5252/");
});
