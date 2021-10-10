import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BannerContainer, CarouselBottomFadeEffect } from "./banner.styles";

const Banner = () => {
    return (
        <BannerContainer>
            <div className="relative">
                <CarouselBottomFadeEffect></CarouselBottomFadeEffect>
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
        </BannerContainer>
    )
}

export default Banner
