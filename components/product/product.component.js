import Image from 'next/image'
import { useState } from 'react'
import { StarIcon } from "@heroicons/react/solid"
import NumberFormat from 'react-number-format';
import { PrimeContainer, ProductCategory, ProductContainer, ProductDescription } from './product.styles';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({title, id, price, description, category, image }) => {
    const [rating, setRating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1)) + MIN_RATING
    )
    const [hasPrime] = useState(
        Math.random() < 0.5
    )
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = {title, id, price, description, category, image, hasPrime, rating }
        dispatch(addToBasket(product))
    }

    return (
        <ProductContainer>
            <ProductCategory>{category}</ProductCategory>
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
            <ProductDescription>{description}</ProductDescription>
            <div className="mb-5">
                <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
            {
                hasPrime && (
                    <PrimeContainer>
                        <img className="w-12" src="https://links.papareact.com/fdw" alt="amazon prime" />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </PrimeContainer>
                )
            }    
            
            <button className="button mt-auto" onClick={addItemToBasket}>
                Add to Basket
            </button>
        </ProductContainer>
    )
}

export default Product
