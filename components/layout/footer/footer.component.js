import { BackToTop, Countries, FooterContainer, FooterWrapper, Hr, Section, SectionItem, SectionTitle } from "./footer.styles"
import Image from 'next/image'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    return (
        <FooterContainer>
            <BackToTop onClick={scrollToTop}>
                Back to Top
            </BackToTop>
            <FooterWrapper>
                <Section>
                    <SectionTitle>Get to Know Us</SectionTitle>
                    <SectionItem>About Us</SectionItem>
                    <SectionItem>Careers</SectionItem>
                    <SectionItem>Press Releases</SectionItem>
                    <SectionItem>Amazon Cares</SectionItem>
                    <SectionItem>Gift a Smile</SectionItem>
                </Section>
                <Section>
                    <SectionTitle>Connect with Us</SectionTitle>
                    <SectionItem>Facebook</SectionItem>
                    <SectionItem>Twitter</SectionItem>
                    <SectionItem>Instagram</SectionItem>
                </Section>
                <Section>
                    <SectionTitle>Make Money with Us</SectionTitle>
                    <SectionItem>Sell on Amazon</SectionItem>
                    <SectionItem>Sell under Amazon Accelerator</SectionItem>
                    <SectionItem>Become an Affiliate</SectionItem>
                    <SectionItem>Sell on Amazon</SectionItem>
                    <SectionItem>Fulfilment by Amazon</SectionItem>
                    <SectionItem>Advertise Your Products</SectionItem>
                    <SectionItem>Amazon Pay on Merchants</SectionItem>
                </Section>
                <Section>
                    <SectionTitle>Let Us Help You</SectionTitle>
                    <SectionItem>COVID-19 and Amazon</SectionItem>
                    <SectionItem>Your Account</SectionItem>
                    <SectionItem>Returns Centre</SectionItem>
                    <SectionItem>100% Purchase Protection</SectionItem>
                    <SectionItem>Amazon App Download</SectionItem>
                    <SectionItem>Amazon Assistant Download</SectionItem>
                    <SectionItem>Help</SectionItem>
                </Section>
            </FooterWrapper>
            <Hr />
            <FooterWrapper>
                <div className="flex flex-col p-4 justify-center mx-auto items-center">
                    <Image 
                        src="https://links.papareact.com/f90"
                        alt="amazon"
                        height={70}
                        width={80}
                        objectFit="contain"
                    />
                    <div className="flex justify-center flex-wrap px-4 md:px-10">
                        <Countries>Australia</Countries>
                        <Countries>Brazil</Countries>
                        <Countries>Canada</Countries>
                        <Countries>China</Countries>
                        <Countries>France</Countries>
                        <Countries>Germany</Countries>
                        <Countries>Italy</Countries>
                        <Countries>Japan</Countries>
                        <Countries>Mexico</Countries>
                        <Countries>Netherlands</Countries>
                        <Countries>Singapore</Countries>
                        <Countries>Turkey</Countries>
                        <Countries>United Arab Emirates</Countries>
                        <Countries>United Kingdom</Countries>
                    </div>
                </div>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
