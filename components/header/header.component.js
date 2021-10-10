import Image from 'next/image'
import {SearchIcon, MenuIcon, ShoppingCartIcon} from '@heroicons/react/outline'

// check no 1. for Image src whitelisting
const Header = () => {
    return (
        <header>
            {/* Top nav*/}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        src="https://links.papareact.com/f90"
                        height={40}
                        width={150}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/*Search*/}
                <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center rounded-md cursor-pointer flex-grow h-10">
                    <input 
                        type="text" 
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-2"
                    />
                    <SearchIcon className="h-12 p-4 " />
                </div>

                {/*Right*/}
                <div className="text-white flex items-center text-xs space-x-6 sm:mx-6 whitespace-nowrap">
                    <div className="link">
                        <p className="text-xs">Hello Shilu Pilu</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div className="link relative flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-3 w-3 sm:h-4 sm:w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-7 sm:h-10"/>
                        <p className="font-extrabold md:text-sm hidden md:inline mt-2">Basket</p>
                    </div>
                </div>            
            </div>

        {/*Bottom nav */}
        <div className="flex items-center text-white p-2 pl-6 space-x-3 bg-amazon_blue-light">
            <p className="link flex items-center">
                <MenuIcon className="h-6 mr-1" /> 
                <span className="hidden md:inline">All</span>
            </p>
            <p className="link">Prime Video</p>
            <p className="link">Amazon Business</p>
            <p className="link">Today's Deals</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Food & Grocery</p>
            <p className="link hidden lg:inline-flex">Prime</p>
            <p className="link hidden lg:inline-flex">Buy Again</p>
            <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
            <p className="link hidden lg:inline-flex">health & Personal Care</p>
        </div>
        </header>
    )
}

export default Header
