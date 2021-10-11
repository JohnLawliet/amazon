import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../../components/checkout-product/checkout-product.component'
import { selectItems } from '../../redux/slices/basketSlice'

const CheckoutPage = () => {
    const items = useSelector(selectItems)
    const total = items.reduce((acc, item) => (item.quantity * item.price) + acc, 0)
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
                        <p className="absolute hidden sm:inline bottom-0 right-1">Price</p>
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
                    <div className="flex justify-end border-t">
                        <h1 className="text-xl font-semibold">Subtotal:</h1>
                        <p className="text-xl font-semibold pl-2">${total.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CheckoutPage
