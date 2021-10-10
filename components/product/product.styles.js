import tw from "twin.macro";

export const ProductContainer = tw.div`
flex relative flex-col m-5 bg-white z-30 p-10
`

export const ProductCategory = tw.p`
absolute top-2 right-2 text-xs italic text-gray-400
`

export const ProductDescription = tw.p`
my-2 text-xs line-clamp-2
`

export const PrimeContainer = tw.div`
items-center flex space-x-2 -mt-5
`