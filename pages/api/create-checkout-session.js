// using process.env.STRIPE_SECRET_KEY here instead of process.env.stripe_secret_key
// coz next.config is visible in frontend and apis are loaded from server which only have access to .env.local
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req,res) => {
    const {items, email} = req.body

    // stripe needs input data to be in this format
    const transformedItems = items.map(item => ({
        description: item.description,
        quantity: item.quantity,
        price_data: {
            currency: "usd",
            unit_amount: item.price*100,
            product_data: {
                name:item.title,
                images: [item.image]
            }
        }
    }))

    // metadata is reqd for firebase
    // changes to init code : images: JSON.stringify(items.map(item => item.image))
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ["shr_1JjOzRLcOHPm3441tAaiR84V"],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', "CA", "IN"]
        },  
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    })

    res.status(200).json({ id: session.id })
}