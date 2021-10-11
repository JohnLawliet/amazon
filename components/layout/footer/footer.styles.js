import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = tw.footer`
    w-full bg-gray-800
`

export const BackToTop = tw.div`
text-white flex justify-center items-center cursor-pointer  p-3 shadow-md
bg-gradient-to-t from-gray-600 to-gray-500
hover:text-yellow-400
`

export const FooterWrapper = tw.div`
    max-w-screen-lg flex mx-auto flex-wrap justify-between
    sm:justify-between 
`

export const Section = tw.section`
    sm:p-4 m-8 space-y-1
`

export const SectionTitle = tw.h1`
    text-lg sm:text-xl text-white font-semibold mb-2
`

export const SectionItem = tw.p`
    text-xs text-white
`

export const Hr = tw.hr`
    border-b border-gray-400
`

export const Countries = tw.p`
text-xs text-white px-2 md:px-4 py-1
`
