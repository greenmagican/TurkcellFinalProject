import React from 'react'

import Footer from '../organisms/Footer/Footer'
import LearnEarnBlog from '../organisms/LearnEarnBlog/LearnEarnBlog'
import ListCrypto from '../organisms/ListCrypto/ListCrypto'
import MarketBanner from '../organisms/MarketBanner/MarketBanner'
import MarketTrends from '../organisms/MarketTrends/MarketTrends'
import Navbar from '../organisms/Navbar/Navbar'

const MarketPageTemplate = () => {
    return (
        <>
            <Navbar />
            <MarketBanner />
            <ListCrypto />
            <MarketTrends />
            <LearnEarnBlog />
            <Footer />
        </>
    )
}

export default MarketPageTemplate