import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import SideBarLinks from '@/components/molecules/SideBarLinks/SideBarLinks';
const SideBar = () => {

    const tSideBar = useTranslations("MarketDashboard.SideBar");
    return (
        <div className="col-12 col-sm-2 col-md-2 p-0">
            <div className="collapse d-sm-block" id="sidebar">
                <aside className="d-flex flex-column aside-bar bg-white p-3">
                    <Link href="/homepage">
                        <div className="mb-5 d-flex align-items-center mt-3">
                            <Image
                                src="/assets/header/frame.svg"
                                alt="Logo"
                                width={32}
                                height={32}
                            />
                            <p className="header-rocket fw-bold ms-2">{tSideBar("logoText")}</p>
                        </div></Link>
                    <SideBarLinks />
                </aside>
            </div>
        </div>
    )
}

export default SideBar