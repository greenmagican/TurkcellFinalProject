import React from 'react'
import Link from "next/link";
import Image from 'next/image';
const SideBar = () => {
    return (
        <div className="col-12 col-sm-2 col-md-2 p-0">
            <div className="collapse d-sm-block" id="sidebar">
                <aside className="d-flex flex-column aside-bar bg-white p-3">
                    <div className="mb-5 d-flex align-items-center mt-3">
                        <Image
                            src="/assets/header/frame.svg"
                            alt="Logo"
                            width={32}
                            height={32}
                        />
                        <p className="header-rocket fw-bold ms-2">Rockie</p>
                    </div>

                    <Link href="/homepage">
                        <div className="home-link bg-primary rounded-pill d-flex align-items-center p-2">
                            <Image
                                src="/assets/trade/home-2.png"
                                alt="home-icon"
                                width={24}
                                height={24}
                            />
                            <p className="mb-0 text-white fw-bold ms-2">Home</p>
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
                            <p className="mb-0 text-dark fw-bold ms-2">Buy Crypto</p>
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
                            <p className="mb-0 text-dark fw-bold ms-2">Market</p>
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
                            <p className="mb-0 text-dark fw-bold ms-2">Exchange</p>
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
                            <p className="mb-0 text-dark fw-bold ms-2">Spot</p>
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
                                <p className="mb-0 ms-2 text-dark fw-bold">ByFi Center</p>
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
                                <p className="mb-0 ms-2 text-dark fw-bold">More</p>
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
                                <p className="mb-0 ms-2 text-dark fw-bold">Asset</p>
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
                                    Order & Trades
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
                                <p className="mb-0 ms-2 text-dark fw-bold">Wallet</p>
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
                            <p className="mb-0 ms-2 text-danger fw-bold">Logout</p>
                        </div>
                    </Link>
                </aside>
            </div>
        </div>
    )
}

export default SideBar