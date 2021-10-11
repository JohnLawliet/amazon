import Header from "../header/header.component"
import Footer from "./footer/footer.component"

const Layout = ({children}) => {
    return (
        <div className="bg-gray-100">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
