import React from 'react'
import Image from "next/image";
import Link from "next/link";
const TradeNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white ">
            <div className="container-fluid fix-navbar ">
                <div
                    className="collapse navbar-collapse px-3 py-2"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav nav_2 d-flex align-items-center ms-auto">
                        <li className="nav-item  ">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control rounded-pill"
                                    placeholder="Search Anything"
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

                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle nav-item-right-enusd"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                EN/USD
                            </Link>
                            <ul className="dropdown-menu ">
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        empty slot
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        empty slot
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        empty slot
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item  symbol-1 ">
                            <Link className="nav-link " href="#">
                                <Image
                                    src="/assets/header/sun.svg"
                                    alt="sun"
                                    width={16}
                                    height={16}
                                />
                            </Link>
                        </li>
                        <li className="nav-item  symbol-2 ">
                            <Link className="nav-link " href="#">
                                <Image
                                    src="/assets/header/Vector.svg"
                                    alt="ring"
                                    width={16}
                                    height={16}
                                />
                            </Link>
                        </li>
                        <li className="nav-item wallet-item ">
                            <Link className="nav-link circle-link" href="#">
                                <span className=" d-flex align-items-center justify-content-center">
                                    <span className="">Wallet</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default TradeNavBar