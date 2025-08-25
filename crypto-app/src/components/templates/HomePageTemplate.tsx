import React from 'react'

import Slider from '../organisms/Slider/Slider'
import About from '../organisms/About/About'
import BtcCards from '../organisms/BtcCards/BtcCards'
import Calltoaction from '../organisms/CallToAction/Calltoaction';
import DownloadApp from '../organisms/DownloadApp/DownloadApp'
import Footer from '../organisms/Footer/Footer'
import HowItWork from '../organisms/HowItWork/HowItWork'
import Market from '../organisms/Market/Market'
import Navbar from '../organisms/Navbar/Navbar'
import Testimonials from '../organisms/Testimonials/Testimonials'

const HomePageTemplate = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <BtcCards />
            <Market />
            <HowItWork />
            <About />
            <DownloadApp />
            <Testimonials />
            <Calltoaction />
            <Footer />
        </>
    )
}

export default HomePageTemplate