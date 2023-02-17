import { PaymentElement } from '@stripe/react-stripe-js';
import { FormEvent, useState } from 'react';
import { useStripe, useElements } from "@stripe/react-stripe-js"

const CheckoutForm: React.FC = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [isLoading, setIsLoading] = useState(false)



    const handleSubmit = async (e: Readonly<FormEvent<HTMLFormElement>>) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        setIsLoading(true)
        const SUCCESS_REDIRECT_URL = `https://et-hfor-all.vercel.app/thank-you`;

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: SUCCESS_REDIRECT_URL
            },
        })


        if (error.type === "card_error" || error.type === "validation_error") {
            console.log(error.message)
        } else {
            console.log(error)
        }

        setIsLoading(false)
    }





    return (
        <div>

            <form onSubmit={handleSubmit}>
                <PaymentElement id='payment-element' />

                <button>Submit</button>

            </form>

        </div>
    );
};

export default CheckoutForm