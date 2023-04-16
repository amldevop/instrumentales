import stripeApi from "./config.js"
// stripe payment
let stripe = Stripe(// Stripe Account Required)
    stripeApi
);
document.getElementById("checkout").addEventListener("click",function(){
    stripe.redirectToCheckout({
        lineItems: [
            {
                price:"price_1MOq2GHpvri67nyMQRqmlBCv",
                quantity: 1,
            }
        ],
        mode: "subscription",
        successUrl: "https://www.AMLBEATS.fr/",
        cancelUrl: "https://www.AMLBEATS.fr/",
    }).then(function(result){
        alert(result)
    })
})