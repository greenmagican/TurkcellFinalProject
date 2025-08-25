import React from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl';


interface NavBarDropdown {
    text: string,
    href: string
    spanClass: string,
    buttonClass?: string
}
const NavBarDropdown: React.FC<NavBarDropdown> = ({ text, href, spanClass, buttonClass
}) => {




    const tLeft = useTranslations("Navbar.left");
    const locale = useLocale();
    return (
        <li className="nav-item dropdown me-3">
            <Link
                className={`nav-link dropdown-toggle ${buttonClass}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <span className={spanClass}>{tLeft(`${text}`)}</span>
            </Link>
            <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item" href={`/${locale}/login`}>
                        {tLeft("home.login")}
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" href={`/${locale}/register`}>
                        {tLeft("home.register")}
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" href={href}>
                        {tLeft("home.profile")}
                    </Link>
                </li>
            </ul>
        </li>
    )
}

export default NavBarDropdown