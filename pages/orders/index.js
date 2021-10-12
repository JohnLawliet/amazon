import moment from "moment"
import { getSession } from "next-auth/client"
import Order from "../../components/order/order.component"
import db from "../../firebase"


const Orders = ({ orders, session }) => {
     console.log("ORDER PAGE : ",orders)
    return (
        <main className="max-w-screen-lg flex flex-col mx-auto p-10">
            <div>
                <h1 className="mb-2 border-b border-yellow-400 font-semibold text-3xl">Your Orders</h1>
                {
                    session? (
                        <h2 className="font-medium">{orders.length} Orders</h2>
                    ) : (
                        <h2 className="font-medium text-xl">Please sign in to review your orders</h2>
                    )
                }
            </div>

            <div className="mt-5 space-y-4">
            {
                orders?.map(({id, amount, amountShipping, items, timestamp, images}) => (
                    <Order 
                        key={id}
                        id={id}
                        amount={amount}
                        amountShipping={amountShipping}
                        items={items}
                        timestamp={timestamp}
                        images={images}
                    />
                ))
            }
            </div>
        </main>  
    )
}

export default Orders

// anything in serversideprops is nodejs
export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

    // Get users logged in creds
    const session = await getSession(context)

    // if user is not to be allowed to go to orders page without 
    // if (!session) {
    //     return {
    //         redirect: {
    //             permanent: false,
    //             destination: "/"
    //         }
    //     }
    // }

    if (!session) {
        return {
            props: {}
        }
    }

    // access firestore on frontend side to get the orders
    const stripeOrders = await db
    .collection('users')
    .doc(session.user.email)
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get()

    console.log("stripeOrders : ",stripeOrders.docs)

    // stripe orders
    // timestamps cannot be transferred directly. The data gets lost so its recommended to convert it to UNIX value
    // taking every order id from db and using it to fetch session data from stripe. This session data has info about the particular product in line_items key
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images:order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100
                })
            ).data
        }))
    )

    return {
        props: {
            orders,
            session
        }
    }
}