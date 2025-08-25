import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
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


                    <Link href="/homepage">
                        <div className="home-link bg-primary rounded-pill d-flex align-items-center p-2">
                            <Image
                                src="/assets/trade/home-2.png"
                                alt="home-icon"
                                width={24}
                                height={24}
                            />
                            <p className="mb-0 text-white fw-bold ms-2">{tSideBar("home")}</p>
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="home-link bg-white d-flex align-items-center p-2">
                            <Image
                                src="/assets/trade/bitcoin-card.png"
                                alt="buycrypto-icon"
                                width={24}
                                height={24}
                            />
                            <p className="mb-0 text-dark fw-bold ms-2">{tSideBar("buyCrypto")}</p>
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="home-link bg-white d-flex align-items-center p-2">
                            <Image
                                src="/assets/trade/light.png"
                                alt="market-icon"
                                width={24}
                                height={24}
                            />
                            <p className="mb-0 text-dark fw-bold ms-2">{tSideBar("market")}</p>
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="home-link bg-white d-flex align-items-center p-2">
                            <Image
                                src="/assets/trade/exchange.png"
                                alt="exchange-icon"
                                width={24}
                                height={24}
                            />
                            <p className="mb-0 text-dark fw-bold ms-2">{tSideBar("exchange")}</p>
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="home-link bg-white d-flex align-items-center p-2">
                            <Image
                                src="/assets/trade/bitcoin-convert.png"
                                alt="spot-icon"
                                width={24}
                                height={24}
                            />
                            <p className="mb-0 text-dark fw-bold ms-2">{tSideBar("spot")}</p>
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="home-link bg-white d-flex justify-content-between align-items-center p-2">
                            <div className="d-flex align-items-center">
                                <Image
                                    src="/assets/trade/trade.png"
                                    alt="byfi-icon"
                                    width={24}
                                    height={24}
                                />
                                <p className="mb-0 ms-2 text-dark fw-bold">{tSideBar("byfiCenter")}</p>
                            </div>
                            <Image
                                src="/assets/trade/arrow.png"
                                alt="arrow"
                                width={12}
                                height={6.84}
                            />
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="home-link bg-white d-flex justify-content-between align-items-center p-2">
                            <div className="d-flex align-items-center">
                                <Image
                                    src="/assets/trade/more-circle.png"
                                    alt="more-icon"
                                    width={24}
                                    height={24}
                                />
                                <p className="mb-0 ms-2 text-dark fw-bold">{tSideBar("more")}</p>
                            </div>
                            <Image
                                src="/assets/trade/arrow.png"
                                alt="arrow"
                                width={12}
                                height={6.84}
                            />
                        </div>
                    </Link>

                    <hr className="sidebar-line" />

                    <Link href="#">
                        <div className="home-link bg-white d-flex justify-content-between align-items-center p-2">
                            <div className="d-flex align-items-center">
                                <Image
                                    src="/assets/trade/buy-crypto.png"
                                    alt="asset-icon"
                                    width={24}
                                    height={24}
                                />
                                <p className="mb-0 ms-2 text-dark fw-bold">{tSideBar("asset")}</p>
                            </div>
                            <Image
                                src="/assets/trade/arrow.png"
                                alt="arrow"
                                width={12}
                                height={6.84}
                            />
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="home-link bg-white d-flex justify-content-between align-items-center p-2">
                            <div className="d-flex align-items-center">
                                <Image
                                    src="/assets/trade/card-coin.png"
                                    alt="order-icon"
                                    width={24}
                                    height={24}
                                />
                                <p className="mb-0 ms-2 text-dark fw-bold">
                                    {tSideBar("orderTrades")}
                                </p>
                            </div>
                            <Image
                                src="/assets/trade/arrow.png"
                                alt="arrow"
                                width={12}
                                height={6.84}
                            />
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="home-link bg-white d-flex justify-content-between align-items-center p-2">
                            <div className="d-flex align-items-center">
                                <Image
                                    src="/assets/trade/wallet.png"
                                    alt="wallet-icon"
                                    width={24}
                                    height={24}
                                />
                                <p className="mb-0 ms-2 text-dark fw-bold">{tSideBar("wallet")}</p>
                            </div>
                            <Image
                                src="/assets/trade/arrow.png"
                                alt="arrow"
                                width={12}
                                height={6.84}
                            />
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="home-link bg-white d-flex align-items-center justify-content-start p-2">
                            <Image
                                src="/assets/trade/logout.png"
                                alt="logout-icon"
                                width={24}
                                height={24}
                            />
                            <p className="mb-0 ms-2 text-danger fw-bold">{tSideBar("logout")}</p>
                        </div>
                    </Link>
                </aside>
            </div>
        </div>
    )
}

export default SideBar