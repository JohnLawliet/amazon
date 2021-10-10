import Image from 'next/image'
import {MenuIcon, ShoppingCartIcon} from '@heroicons/react/outline'
import { BasketIconBadge, BasketIconField, BasketIconTitle, BottomNav, HeaderRightContainer, HeaderWrapper, LogoContainer, MenuIconContainer } from './header.styles'
import Search from '../search/search.component'

const Header = () => {
    return (
        <header>
            <HeaderWrapper>
                <LogoContainer>
                    <Image 
                        src="https://links.papareact.com/f90"
                        height={40}
                        width={150}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </LogoContainer>

                <Search />

                <HeaderRightContainer>
                    <div className="link">
                        <p className="text-xs">Hello Shilu Pilu</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <BasketIconField className="link">
                        <BasketIconBadge>0</BasketIconBadge>
                        <ShoppingCartIcon className="h-7 sm:h-10"/>
                        <BasketIconTitle>Basket</BasketIconTitle>
                    </BasketIconField>
                </HeaderRightContainer>            
            </HeaderWrapper>

            <BottomNav>
                <MenuIconContainer className="link">
                    <MenuIcon className="h-6 mr-1" /> 
                    <span className="hidden md:inline">All</span>
                </MenuIconContainer>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">health & Personal Care</p>
            </BottomNav>
        </header>
    )
}

export default Header
