import { useSession } from 'next-auth/client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../../components/checkout-product/checkout-product.component'
import { selectItems } from '../../redux/slices/basketSlice'

const CheckoutPage = () => {
    const items = useSelector(selectItems)
    const [session] = useSession()
    const totalPrice = items.reduce((acc, item) => (item.quantity * item.price) + acc, 0)
    const totalItems = items.reduce((acc, item) => item.quantity + acc, 0)
    // const [updatedItems, setUpdatedItems] = useState([])

    // const checkQty = () => {
    //     let new_items = []
    //     items.forEach(item => {
    //         let quantity = items.filter(i => item.id === i.id).length

    //         if (!new_items.find(i => i.id === item.id)) {
    //             new_items.push({
    //                 ...item,
    //                 quantity
    //             })
    //         }                
    //     })
    //     return (new_items)
    // }

    // useEffect(() => {
    //     const newList = checkQty()
    //     setUpdatedItems(newList)
    // }, [setUpdatedItems])
    
    console.log("items : ",items)

    return (
        <main className="bg-gray-100 lg:flex max-w-screen-2xl mx-auto">
            <div className="flex-grow m-5 shadow-md">
                <Image 
                    src="https://links.papareact.com/ikj"
                    width={1020}
                    height={250}
                    objectFit="contain"
                />
                <div className="space-y-10 flex flex-col p-5 bg-white">
                    <div className="relative">
                        <h1 className="text-3xl border-b pb-4">
                        {
                            items.length === 0 ? 'Your Amazon Cart is empty.' : 'Shopping Cart'
                        }
                        </h1>
                    </div>
                    {
                        items?.map(({id, description, title, rating, price, hasPrime, category, image, quantity}, i) => (
                            <CheckoutProduct 
                                key={id}
                                id={id}
                                description={description}
                                title={title}
                                rating={rating}
                                price={price}
                                hasPrime={hasPrime}
                                category={category}
                                image={image}
                                quantity={quantity}
                            />
                        ))
                    }
                </div>
            </div>
            

            <div className="flex flex-col bg-white p-10 shadow-md">
            {items.length > 0 && (
                <>
                    <div className="flex justify-between">
                        <h2 className="whitespace-nowrap">Subtotal ({totalItems}) items:
                            <span className="font-bold">
                                <NumberFormat value={totalPrice.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={' $'} />
                            </span>                            
                        </h2>
                    </div>

                    <button 
                    disabled={!session}
                    className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                    {
                        !session? "Sign in to checkout" : "Proceed to checkout"
                    }
                    </button>
                </>
            )}
        </div>
        </main>
    )
}

export default CheckoutPage
