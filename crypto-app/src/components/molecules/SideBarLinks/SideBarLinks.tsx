import SideBarLink from '@/components/atoms/SideBarLinks/SideBarLink'
import { useTranslations } from 'next-intl';
import React from 'react'

const SideBarLinks = () => {

    const tSideBar = useTranslations("MarketDashboard.SideBar");

    return (
        <>
            <SideBarLink src='/assets/trade/home-2.png' alt='home-icon'
                href='/homepage' background='bg-primary' text={tSideBar("home")}
                shape='rounded-pill' color='text-white' />

            <SideBarLink src='/assets/trade/bitcoin-card.png' alt='buycrypto-icon'
                href='/homepage' background='bg-white' text={tSideBar("buyCrypto")}
                shape='rounded-pill' color='text-dark' />

            <SideBarLink src='/assets/trade/light.png' alt='market-icon'
                href='/market' background='bg-white' text={tSideBar("market")}
                color='text-dark' />

            <SideBarLink src='/assets/trade/exchange.png' alt='exchange-icon'
                href='/trade' background='bg-white' text={tSideBar("exchange")}
                color='text-dark' />

            <SideBarLink src='/assets/trade/bitcoin-convert.png' alt='spot-icon'
                href='/homepage' background='bg-white' text={tSideBar("spot")}
                color='text-dark' />

            <SideBarLink src='/assets/trade/trade.png' alt='spot-icon'
                href='/homepage' background='bg-white' text={tSideBar("byfiCenter")}
                color='text-dark' />

            <SideBarLink src='/assets/trade/more-circle.png' alt='more-icon'
                href='/homepage' background='bg-white' text={tSideBar("more")}
                color='text-dark' />

            <hr className="sidebar-line" />

            <SideBarLink src='/assets/trade/buy-crypto.png' alt='asset-icon'
                href='/homepage' background='bg-white' text={tSideBar("asset")}
                color='text-dark' />

            <SideBarLink src='/assets/trade/card-coin.png' alt='order-icon'
                href='/homepage' background='bg-white' text={tSideBar("orderTrades")}
                color='text-dark' />

            <SideBarLink src='/assets/trade/wallet.png' alt='wallet-icon'
                href='/homepage' background='bg-white' text={tSideBar("wallet")}
                color='text-dark' />

            <SideBarLink src='/assets/trade/logout.png' alt='logout-icon'
                href='/homepage' background='bg-white' text={tSideBar("logout")}
                color='text-danger  ' />

        </>
    )
}

export default SideBarLinks