import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
// import { toast } from "react-toastify";
import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/index';

const CURRENCY = 'USD';

export default class TakeMoney extends React.Component {
    // onToken = (token) => {
    //     fetch('/save-stripe-token', {
    //         method: 'POST',
    //         body: JSON.stringify(token),
    //     }).then(response => {
    //         response.json().then(data => {
    //             alert(`We are in business, ${data.email}`);
    //         });
    //     });
    // }
    successPayment = data => {
        alert('Payment Successful');
      };
       
     errorPayment = data => {
        alert('Payment Error');
      };

    onToken = (amount) => token =>
    axios.post(PAYMENT_SERVER_URL,
    {
      source: token.id,
      currency: CURRENCY,
    //   amount: fromEuroToCent(amount)
    })
    .then(this.successPayment)
    .catch(this.errorPayment);

    // ...

    render() {
        return (
            // ...
            <StripeCheckout
                token={this.onToken(this.props.amount *100)}
                // name={name}
                
                // token={onToken(amount, description)}
                currency={CURRENCY}
                stripeKey={STRIPE_PUBLISHABLE}
            />
        )
    }
}
