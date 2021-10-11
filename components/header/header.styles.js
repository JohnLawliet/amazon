import tw from "twin.macro";

export const HeaderWrapper = tw.div`
flex items-center bg-amazon_blue p-1 flex-grow py-2
`

export const LogoContainer = tw.div`
mt-2 flex items-center flex-grow 
sm:flex-grow-0
`

export const HeaderRightContainer = tw.div`
text-white flex items-center text-xs space-x-6 sm:mx-6 whitespace-nowrap
`

export const BasketIconField = tw.div`
relative flex items-center
`

export const BasketIconBadge = tw.span`
absolute -top-1 right-0 h-3 w-3  bg-yellow-400 text-center rounded-full text-black font-bold text-[10px] pb-4
sm:h-4 sm:w-4
md:right-10 
`

export const BasketIconTitle = tw.p`
font-extrabold mt-2 hidden
md:text-sm md:inline 
`

export const BottomNav = tw.div`
flex items-center text-white p-2 pl-6 space-x-3 bg-amazon_blue-light
`

export const MenuIconContainer = tw.div`
flex items-center
`
