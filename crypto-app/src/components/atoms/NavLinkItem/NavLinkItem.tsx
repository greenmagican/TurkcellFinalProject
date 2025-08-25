import React from 'react'
import Link from 'next/link'

interface NavLinkItem {
    href: string,
    className?: string,
    children: string
}

const NavLinkItem: React.FC<NavLinkItem> = ({ href, className, children }) => {
    return (

        <li className='nav-item'>
            <Link className={className} href={href} children={children}></Link>
        </li>
    )
}

export default NavLinkItem