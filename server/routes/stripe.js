const express = require('express');
const router = express.Router();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
console.log('Stripe Key:', process.env.STRIPE_SECRET_KEY);
router.post('/payment', (req, res) => {
    const { tokenId, amount } = req.body;

    if (!tokenId || !amount) {
        return res.status(400).json({ error: 'Token ID and amount are required.' });
    }
    stripe.charges.create({
        source: tokenId,
        amount: amount,
        currency: "usd"
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            console.error("Stripe error:", stripeErr);
            return res.status(500).json({ error: stripeErr.message });
        } else {
            return res.status(200).json(stripeRes);
        }
    });
});
module.exports = router;