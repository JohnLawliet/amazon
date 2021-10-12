import Image from 'next/image'
import {MenuIcon, ShoppingCartIcon} from '@heroicons/react/outline'
import { BasketIconBadge, BasketIconField, BasketIconTitle, BottomNav, HeaderRightContainer, HeaderWrapper, LogoContainer, MenuIconContainer } from './header.styles'
import Search from '../search/search.component'
import { useSession, signIn, signOut } from "next-auth/client"
import { useRouter } from 'next/dist/client/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../../redux/slices/basketSlice'

const Header = () => {
    const [session, loading] = useSession()
    const router = useRouter()
    const basket_items = useSelector(selectItems)
    const basketQty = basket_items.reduce((acc, num) => acc + num.quantity, 0)

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
                        onClick={() => router.push("/")}
                    />
                </LogoContainer>

                <Search />

                <HeaderRightContainer>
                    <div className="link" onClick={!session ? signIn : signOut}>
                        <p className="hover:underline">
                        {
                            session ? `Hello ${session.user.name}` : 'Sign In'
                        }
                        </p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    
                    <div 
                    className="link"
                    onClick={() => router.push("/orders")}
                    >
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <BasketIconField className="link" onClick={() => router.push("/checkout")}>
                        <BasketIconBadge>
                            {basketQty}
                        </BasketIconBadge>
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
