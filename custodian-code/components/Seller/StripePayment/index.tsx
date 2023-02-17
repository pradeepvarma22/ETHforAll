import { INFTItemEx } from "@/types"
import { Elements } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

interface IProps {
    nft: INFTItemEx
}


const StripePayment: React.FC<IProps> = ({ nft }) => {
    const [clientSecret, setClientSecret] = useState<string>("")
    const price = nft.price
    const nftId = nft.tokenId
    const [isSellClicked, setIsSellClicked] = useState(false)




    async function getPaymentIntent() {
        const req = await fetch('/api/stripe/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ price,  nftId })
        })
        const res = await req.json()
        console.log(res)
        setClientSecret(res.client_secret)
    }


    async function onPageLoad() {
        await getPaymentIntent()
    }


    useEffect(() => {
        onPageLoad()
    }, [])



    const options = {
        clientSecret: clientSecret!
    };




    return (
        <>





            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}

        </>
    )
}

export default StripePayment



