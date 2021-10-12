import {buffer} from 'micro'
import * as admin from 'firebase-admin'

// Secure connection to Firebase from backend
const serviceAccount = require('../../permissions.json')

// To ensure against initializing the app twice
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app();

// Establish connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_SIGNING_KEY


// changes to init code: images: JSON.parse(session.metadata.images)
const fulfillOrder = async (session) => {
    console.log('fulfilling order : ',session)
    return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
        amount: session.amount_total/100,
        amount_shipping: session.total_details.amount_shipping/100,
        images: JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log(`SUCCESS: Order ${session.id} had been added to the Db`)
    })
}

export default async (req, res) => {
    if (req.method === "POST"){
        // Generate a certificate for endpoint authorization purpose?
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.headers["stripe-signature"]

        let event

        // verify that the event posted came from stripe
        try{
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
        }
        catch(err){
            console.log("Error ",err.message)
            return res.status(400).send(`Webhook error : ${err.message}`)
        }


        // handle the checkout.session/completed event (fires off after user completes payment)
        if (event.type === "checkout.session.completed"){
            const session = event.data.object

            // fulfill the order by saving in db and making it available for viewing
            return fulfillOrder(session)
            .then(() => res.status(200))
            .catch(err => res.status(500)
            .send(`Webhook error : ${err.message}`))
        }
    }
}

// webhooks doesn't handle bodyParser
// externalResolver is to give access to stripe to resolve request
export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}