


import React from 'react'
import { signOut, User } from "firebase/auth";
import { useLocale, useTranslations } from 'next-intl';
import Button from '@/components/atoms/Button/Button';
import ChatbotIcon from '@/components/Chatbot/ChatbotIcon';
import ThemeToggleIcon from '@/components/ThemeToggler/ThemeApplier';
import router from 'next/router';
import { auth } from '../../../../firebase/firebase';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import Link from 'next/link';

interface AuthState {
    user: User | null | undefined;
    loading: boolean;
    error: Error | undefined;
}

const NavLinksRight: React.FC<AuthState> = ({ user }) => {
    const tRight = useTranslations("Navbar.right");
    const locale = useLocale();
    return (
        <ul className="navbar-nav ms-auto gap-2 d-flex align-items-center ">
            <li className="nav-item ">
                <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown">
                    {tRight("assets")}
                </a>
            </li>
            <li className="nav-item  ">
                <a className="nav-link  nav-item-right" href="#" role="button" data-bs-toggle="dropdown">
                    {tRight("order")}
                </a>
            </li>
            <LocaleSwitcher />
            <li className="nav-item ">
                <ThemeToggleIcon />
            </li>
            <li className="nav-item ">
                <ChatbotIcon />
            </li>
            <li className="nav-item ">
                <Link className="nav-link" href="#">
                    <Button type="button" className="btn btn-outline-secondary rounded-pill" >{tRight("wallet")}</Button>
                </Link>
            </li>
            {!user &&
                <li className="nav-item rounded">
                    <Link className="nav-link" href={`/${locale}/login`}>
                        <Button type="button" className="btn btn-outline-secondary rounded-pill" > {tRight("login")}</Button>

                    </Link>
                </li>
            }
            {user && (
                <li className="nav-item">
                    <Button type="button" className="btn btn-danger ms-2" onClick={async () => {
                        await signOut(auth);
                        router.push(`/${locale}/homepage`);
                    }} >Logout </Button>
                </li>
            )}
        </ul>
    )
}

export default NavLinksRight