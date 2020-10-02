import React from "react"
import HomeDetail from "./landing"
import BR from "../lineBreak"
import SectionThree from "./sectionThree"
import Social from "./Social"
import EmailForm from "./emailForm"
import Carousel from "./carousel"
import Pricing from "./pricing"
import SomeThingAboutMe from './SomeThingAboutMe'

export default () => {
    return (
        <>
            <HomeDetail />
            <SectionThree />
            <EmailForm />
            <Carousel />
            <BR color="rgb(229 238 239)" />
            <Social />
            <BR color="rgb(229 238 239)" />
            <SomeThingAboutMe />
        </>
    )
}