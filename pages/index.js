import Head from 'next/head'
import Banner from '../components/banner'
import Header from '../components/header/header.component'
import ProductFeed from '../components/productFeed'

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto bg-gray-100">
        <Banner />
        <ProductFeed products={products}/>      
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json())
  return {
    props: {
      products
    }
  }
}
