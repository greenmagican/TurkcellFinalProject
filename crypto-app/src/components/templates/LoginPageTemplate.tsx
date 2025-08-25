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
import Breadcrumb from '../molecules/Breadcrumb/Breadcrumb';
import LoginPage from '../organisms/Login/LoginPage';


const LoginPageTemplate = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb header="login" />
            <LoginPage />
            <Calltoaction />
            <Footer />
        </>
    )
}

export default LoginPageTemplate