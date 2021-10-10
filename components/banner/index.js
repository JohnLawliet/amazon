import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <main className="max-w-screen-2xl mx-auto">
            <div className="relative">
                <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20"></div>
                <Carousel 
                    autoPlay
                    infiniteLoop
                    showIndicators={false}
                    showThumbs={false}
                    interval={5000}
                    showStatus={false}
                >
                    <div>
                        <img src="https://links.papareact.com/gi1" alt="book" />
                    </div>
                    <div>
                        <img src="https://links.papareact.com/6ff" alt="hook" />
                    </div>
                    <div>
                        <img src="https://links.papareact.com/7ma" alt="fook" />
                    </div>                
                </Carousel>
            </div>
            
        </main>
    )
}

export default Banner
