import React from 'react'
import Image from "next/image";
import Link from "next/link";
import ThemeToggleIcon from '@/components/ThemeToggler/ThemeApplier';
import ChatbotIcon from '@/components/Chatbot/ChatbotIcon';
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useAuthState } from "../../../app/services/authServices";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase/firebase";
import LocaleSwitcher from '@/components/molecules/LocaleSwitcher/LocaleSwitcher';
import Button from '@/components/atoms/Button/Button';



const TradeNavBar = () => {


    const tRight = useTranslations("Navbar.right");
    const router = useRouter();
    const locale = useLocale();
    const user = useAuthState();
    const tTradeNav = useTranslations("MarketDashboard.TradeNav");

    return (
        <nav className="navbar navbar-expand-lg bg-white      ">
            <div className="container-fluid fix-navbar ">
                <div
                    className="collapse navbar-collapse px-3 py-2"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav nav_2 d-flex align-items-center ms-auto gap-2">
                        <li className="nav-item  ">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control rounded-pill"
                                    placeholder={tTradeNav("search")}
                                />
                                <button
                                    className="btn btn-link position-absolute pe-3 z-10 end-0"
                                    type="button"
                                >
                                    <img
                                        src="https://img.icons8.com/?size=24&id=132&format=png&color=B1B5C3"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </li>
                        <LocaleSwitcher />
                        <li className="nav-item  symbol-1 ">
                            <ThemeToggleIcon />
                        </li>
                        <li className="nav-item  symbol-1 ">
                            <ChatbotIcon />
                        </li>
                        <div className="rightest d-flex  ">
                            <li className="nav-item wallet-item ">
                                <li className="nav-item me-2">
                                    <Link className="nav-link" href="#">
                                        <button className="btn btn-outline-secondary rounded-pill">{tRight("wallet")}</button>
                                    </Link>
                                </li>
                            </li>
                            {!user &&
                                <li className="nav-item rounded">

                                    <Link className="nav-link" href={`/${locale}/login`}>
                                        <button className="btn btn-outline-secondary rounded-pill">
                                            {tRight("login")}
                                        </button>
                                    </Link>
                                </li>
                            }
                            {user && (
                                <li className="nav-item">
                                    <Button
                                        className="btn btn-danger ms-2"
                                        onClick={async () => {
                                            await signOut(auth);
                                            router.push(`/${locale}/homepage`);
                                        }}
                                    >
                                        Logout
                                    </Button>
                                </li>
                            )}

                        </div>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default TradeNavBar