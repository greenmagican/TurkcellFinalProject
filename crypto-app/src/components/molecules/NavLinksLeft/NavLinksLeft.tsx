import NavBarDropdown from '@/components/atoms/NavBarDropdown/NavBarDropdown'
import React from 'react'
import NavLinks from '../NavLinks/NavLinks'
import { User } from 'firebase/auth';
import { useLocale } from 'next-intl';
interface AuthState {
    user: User | null | undefined;
    loading: boolean;
    error: Error | undefined;
}
const NavLinksLeft: React.FC<AuthState> = ({ user }) => {
    const locale = useLocale();

    return (
        <ul className="navbar-nav me-auto d-flex gap-1 align-items-center">
            <NavBarDropdown buttonClass="homepage-btn" spanClass="text-white" text="home.title" href={user ? `/${locale}/profile/${user.uid}` : `/${locale}/login`} />
            <NavLinks />
            <NavBarDropdown spanClass="text-dark" text="pages" href={user ? `/${locale}/profile/${user.uid}` : `/${locale}/login`} />
        </ul>
    )
}

export default NavLinksLeft