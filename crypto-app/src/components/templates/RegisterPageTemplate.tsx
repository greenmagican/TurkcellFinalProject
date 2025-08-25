import React from 'react'
import Breadcrumb from '../molecules/Breadcrumb/Breadcrumb'
import Calltoaction from '../organisms/CallToAction/Calltoaction'
import Footer from '../organisms/Footer/Footer'
import Navbar from '../organisms/Navbar/Navbar'
import RegisterContent from '../organisms/RegisterContent/RegisterContent'


const RegisterPageTemplate = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb header="register" />
            <RegisterContent />
            <Calltoaction />
            <Footer />
        </>
    )
}

export default RegisterPageTemplate