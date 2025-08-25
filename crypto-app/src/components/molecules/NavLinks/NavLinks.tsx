import NavLinkItem from '@/components/atoms/NavLinkItem/NavLinkItem'
import { useLocale, useTranslations } from 'next-intl';
import React from 'react'

const NavLinks = () => {
    const tLeft = useTranslations("Navbar.left");
    const locale = useLocale();


    return (
        <>
            <NavLinkItem className="nav-link nav-item-left" href={`/${locale}/login`} children={tLeft("buy")} />
            <NavLinkItem className="nav-link nav-item-left" href={`/${locale}/market`} children={tLeft("market")} />
            <NavLinkItem className="nav-link nav-item-left" href={`/${locale}/homepage`} children={tLeft("exchange")} />
            <NavLinkItem className="nav-link nav-item-left" href={`/${locale}/homepage`} children={tLeft("spot")} />
            <NavLinkItem className="nav-link nav-item-left" href={`/${locale}/trade`} children={tLeft("bitusdt")} />

        </>
    )
}

export default NavLinks