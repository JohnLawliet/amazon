import { StarIcon } from "@heroicons/react/solid"
import { ChevronLeftIcon } from "@heroicons/react/outline"
import { ChevronRightIcon } from "@heroicons/react/outline"
import Image from 'next/image'
import NumberFormat from "react-number-format"
import { useState } from "react"
import { removeFromBasket, updateBasket } from "../../redux/slices/basketSlice"
import { useDispatch } from "react-redux"

const CheckoutProduct = ({id, description, title, rating, price, hasPrime, category, image, quantity}) => {
    const [qty, setQty] = useState(quantity)
    const dispatch = useDispatch()

    const removeItem = () => {
        dispatch(removeFromBasket({ id }))
    }

    const updateItem = () => {
        dispatch(updateBasket({ id, quantity: qty}))
    }

    const qtyValue = (op) => {
        switch(op){
            case 'add' : {
                setQty(prev => prev+1)
                return
            }
            case 'sub' : {
                if (qty === 0)
                    return
                else{
                    setQty(prev => prev-1)
                    return
                }
            }
            default: 'no operation'
        }
    }

    return (
        <div className="grid grid-cols-4 sm:grid-cols-6">
            <Image 
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />
            <div className="col-span-3 sm:col-span-4 mx-5 ">
                <p>{title}</p>
                <div className="flex">
                {
                    Array(rating).fill().map((_,i) => (
                        <StarIcon key={i} className="h-4 text-yellow-500"/>
                    ))
                }
                </div>

                <div className="hidden sm:inline my-2 ">
                    <p className="text-xs line-clamp-3">
                    {description}
                    </p>
                </div>

                <div className="sm:hidden my-2 ">
                    <NumberFormat value={price * qty} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </div>
                
                <div className="flex items-center mt-1">
                    <ChevronLeftIcon className="h-4 flex-shrink-0 mr-2 cursor-pointer" onClick={() => qtyValue('sub')}/>
                    {qty}
                    <ChevronRightIcon className="h-4 flex-shrink-0 ml-2 cursor-pointer" onClick={() => qtyValue('add')}/>
                    {
                        (qty !== quantity) && (
                            <p 
                                className="ml-3 text-xs px-2 py-1 cursor-pointer text-white rounded-xl bg-yellow-500"
                                onClick={updateItem}
                            >Update
                            </p>
                        )
                    }
                    <p 
                        className="ml-3 text-xs border-l-2 pl-3 cursor-pointer underline hidden sm:inline"
                        onClick={removeItem}
                    >Delete
                    </p>
                </div>
                <p 
                    className="text-xs mt-1 cursor-pointer underline sm:hidden"
                    onClick={removeItem}
                >Delete
                </p>
                {
                    hasPrime && (
                        <div className="flex items-center space-x-2">
                            <img
                                loading="lazy"
                                className="w-12"
                                src="https://links.papareact.com/fdw"
                                alt="amazon prime logo"
                            />
                            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                        </div>
                    )
                }
            </div>
            
            <div className="hidden sm:inline mb-2 justify-self-end">
                <NumberFormat value={price * qty} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
        </div>
    )
}

export default CheckoutProduct
