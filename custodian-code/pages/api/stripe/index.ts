import type { NextApiRequest, NextApiResponse } from 'next'
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!)




export default async function handlePaymentIntent(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    let paymentIntent;
    try {

        const dollars = req.body.price

        paymentIntent = await stripe.paymentIntents.create({
            amount: dollars,
            payment_method_types: ['card'],
            metadata: { order_id: req.body.nftId },
            currency: "usd",
            description: "for amazon-clone project",
            shipping: {
                name: "Random singh",
                address: {
                    line1: "510 Townsend St",
                    postal_code: "98140",
                    city: "San Francisco",
                    state: "CA",
                    country: "US",
                },
            },

        });

    } catch (error) {
        console.log(error)
    }




    res.status(200).json({ client_secret: paymentIntent.client_secret })
}
