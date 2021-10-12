import { getSession } from 'next-auth/client'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import Banner from '../components/banner'
import ProductFeed from '../components/productFeed/proudctFeed.component'
import { addProductList } from '../redux/slices/basketSlice'

export default function Home({products}) {
  const dispatch = useDispatch()
  dispatch(addProductList(products))

  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <main className="max-w-screen-2xl mx-auto bg-gray-100">
        <Banner />
        <ProductFeed products={products}/>      
      </main>
    </div>
  )
}

// next-auth's getSession can be used serverside to build the page with session
export async function getServerSideProps(context) {
  const session = await getSession(context)

  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json())
  return {
    props: {
      products,
      session
    }
  }
}
