import Image from 'next/image'
import { useState } from 'react'
import { StarIcon } from "@heroicons/react/solid"
import NumberFormat from 'react-number-format';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({title, id, price, description, category, image }) => {
    const [rating, setRating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1)) + MIN_RATING
    )
    const [hasPrime] = useState(
        Math.random() < 0.5
    )

    return (
        <div className="flex relative flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image 
                height={200}
                width={200}
                src={image}
                alt={title}
                objectFit="contain"
            />
            <h4 className="my-3">{title}</h4>
            <div className="flex">
            {
                Array(rating).fill().map((_,i) => (
                    <StarIcon className="h-5 text-yellow-500"/>
                ))
            }
            </div>
            {/* line-clamp-2 is from a plugin. It shows only no. of lines given*/}
            <p className="my-2 text-xs line-clamp-2">{description}</p>
            <div className="mb-5">
                <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
            {
                hasPrime && (
                    <div className="items-center flex space-x-2 -mt-5">
                        <img className="w-12" src="https://links.papareact.com/fdw" alt="amazon prime" />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )
            }    
            
            <button className="button mt-auto">
                Add to Basket
            </button>
        </div>
    )
}

export default Product
