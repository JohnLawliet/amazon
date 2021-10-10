import Product from "../product/product.component"
import { ProductFeedContainer } from "./productFeed.styles"

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
            <img 
                className="md:col-span-full" 
                src="https:/links.papareact.com/dyz"
                alt="ad image"
            />
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