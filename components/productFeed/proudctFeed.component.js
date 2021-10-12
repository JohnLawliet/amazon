import Product from "../product/product.component"
import { ProductFeedContainer } from "./productFeed.styles"
import Image from 'next/image'

// Grid is better for cases where products are to be mapped
// use array.slice() to alter grid design
// ALSO NOTE that grid-flow-row-dense takes the space left in a row automatically.
// without dense grid items do not take free space
const ProductFeed = ({products}) => {
    return (
        <ProductFeedContainer> 
            {
                products
                .slice(0,4)
                .map(({title, id, price, description, category, image }) => (
                    <Product 
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))
            }
            <div className="relative md:col-span-full mx-auto">
                <Image 
                    src="/product.jpg"
                    alt="ad image"
                    width={1600}
                    height={250}
                />
            </div>
            <div className="md:col-span-2 ">
            {
                products
                .slice(4,5)
                .map(({title, id, price, description, category, image }) => (
                    <Product 
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))
            }
            </div>
            {
                products
                .slice(5, products.length)
                .map(({title, id, price, description, category, image }) => (
                    <Product 
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))
            }
        </ProductFeedContainer>
    )
}

export default ProductFeed

// export async function getStaticProps(context) {
//     const products = await fetch('https://fakestoreapi.com/products')
//     const data = await products.json()
// }