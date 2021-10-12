import tw from "twin.macro"


export const SearchContainer = tw.div`
bg-yellow-400 hover:bg-yellow-500 hidden items-center rounded-md cursor-pointer flex-grow h-10
sm:flex relative
`

export const Input = tw.input`
p-2 h-full w-6 flex-grow flex-shrink rounded-l-md 
focus:outline-none px-2
`

export const SearchResultContainer = tw.div`
absolute rounded-md top-10 overflow-y-scroll z-50 max-h-60 min-w-[300px] left-0 right-0 bg-white w-full
`

export const SearchResultItem = tw.div`
p-2 border flex cursor-pointer rounded-md shadow-sm border-gray-300
`

export const SearchResultInfoContainer = tw.div`
ml-2 flex flex-col
`

export const SearchResultTitle = tw.p`
text-xs sm:text-sm
`

export const SearchResultCategory = tw.p`
text-gray-500 text-xs italic font-medium
`