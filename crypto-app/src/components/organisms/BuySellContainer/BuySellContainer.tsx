import React, { useState } from 'react'
import { useTranslations } from "next-intl";
import BalanceContainer from '../BalanceContainer/BalanceContainer';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';

const BuySellContainer = () => {

    const [condition, setCondition] = useState<'buy' | 'sell'>('buy');
    const [color, setColor] = useState('btn-primary');


    const changeColor = (): void => {

        if (condition === 'buy') {
            setColor("btn-danger");
            setCondition("sell");
        }
        else {
            setColor("btn-primary");
            setCondition("buy");
        }

    }

    const tBuySell = useTranslations("MarketDashboard.BuySell");
    return (
        <div className="col col-lg-4 col-md-5 col-sm-12">
            <div className="card border-1 mt-5">
                <div className="card-body py-5">
                    <ul className="nav-underline nav nav-fill justify-content-center gap-2">
                        <li className="nav-item mx-2 ">
                            <Button className={`nav-link ${condition === "buy" ? "active" : ""}`} onClick={changeColor}>
                                <h3 className="fw-bold">{tBuySell("buy")}</h3>
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button className="nav-link " onClick={changeColor}>
                                <h3 className="fw-bold ">{tBuySell("sell")}</h3>
                            </Button>
                        </li>
                    </ul>
                    <div className="menu-tab d-flex align-items-center justify-content-center gap-2 mt-5 mb-5">
                        <Button className="btn btn-primary rounded-pill">
                            Limit
                        </Button>
                        <Button className="btn btn-link text-decoration-none">
                            {tBuySell("market")}
                        </Button>
                        <Button className="btn btn-link text-decoration-none">
                            Stop limit
                        </Button>
                        <Button className="btn btn-link text-decoration-none">
                            Stop market
                        </Button>
                    </div>

                    <div className="input-group flex-column gap-4">
                        <div className="pay-usd d-flex">
                            <input
                                type="text"
                                className="form-control w-100 "
                                placeholder={tBuySell("pay")}
                                aria-label="Username"
                                aria-describedby="pay"
                            />
                            <span
                                className="input-group-text w-50 border-0 text-decoration-none bg-white"
                                id="pay"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="12" cy="12" r="12" fill="#58BD7D" />
                                    <path
                                        d="M11.77 17.3C11.6747 17.3 11.601 17.2697 11.549 17.209C11.497 17.157 11.471 17.0877 11.471 17.001V16.091C10.8383 16.039 10.3053 15.896 9.872 15.662C9.43867 15.4193 9.10933 15.129 8.884 14.791C8.65867 14.453 8.53733 14.0933 8.52 13.712C8.52 13.6427 8.546 13.582 8.598 13.53C8.65867 13.4693 8.728 13.439 8.806 13.439H9.469C9.573 13.439 9.651 13.465 9.703 13.517C9.755 13.569 9.78967 13.6297 9.807 13.699C9.859 13.907 9.96733 14.115 10.132 14.323C10.2967 14.5223 10.5307 14.6913 10.834 14.83C11.146 14.96 11.5447 15.025 12.03 15.025C12.7753 15.025 13.3213 14.895 13.668 14.635C14.0233 14.3663 14.201 14.011 14.201 13.569C14.201 13.2657 14.1057 13.023 13.915 12.841C13.733 12.6503 13.4513 12.4813 13.07 12.334C12.6887 12.1867 12.1947 12.0263 11.588 11.853C10.9553 11.671 10.431 11.4717 10.015 11.255C9.599 11.0383 9.287 10.7697 9.079 10.449C8.87967 10.1283 8.78 9.721 8.78 9.227C8.78 8.59433 9.014 8.05267 9.482 7.602C9.95 7.14267 10.613 6.874 11.471 6.796V5.899C11.471 5.81233 11.497 5.743 11.549 5.691C11.601 5.63033 11.6747 5.6 11.77 5.6H12.264C12.3507 5.6 12.42 5.63033 12.472 5.691C12.5327 5.743 12.563 5.81233 12.563 5.899V6.809C13.1437 6.87833 13.629 7.03867 14.019 7.29C14.409 7.54133 14.7037 7.83167 14.903 8.161C15.1023 8.49033 15.2063 8.811 15.215 9.123C15.215 9.18367 15.1933 9.24433 15.15 9.305C15.1067 9.357 15.0373 9.383 14.942 9.383H14.253C14.1923 9.383 14.1273 9.36567 14.058 9.331C13.9973 9.29633 13.9497 9.23133 13.915 9.136C13.863 8.78067 13.6637 8.48167 13.317 8.239C12.9703 7.99633 12.5197 7.875 11.965 7.875C11.4017 7.875 10.9423 7.98333 10.587 8.2C10.2403 8.41667 10.067 8.75467 10.067 9.214C10.067 9.50867 10.1493 9.75567 10.314 9.955C10.4787 10.1457 10.7387 10.3147 11.094 10.462C11.4493 10.6093 11.913 10.7653 12.485 10.93C13.1783 11.1207 13.746 11.3243 14.188 11.541C14.63 11.749 14.955 12.0133 15.163 12.334C15.3797 12.646 15.488 13.049 15.488 13.543C15.488 14.037 15.3667 14.466 15.124 14.83C14.89 15.194 14.552 15.4843 14.11 15.701C13.6767 15.9177 13.161 16.052 12.563 16.104V17.001C12.563 17.0877 12.5327 17.157 12.472 17.209C12.42 17.2697 12.3507 17.3 12.264 17.3H11.77Z"
                                        fill="white"
                                    />
                                </svg>
                                USD
                            </span>
                        </div>

                        <div className="pay-btc d-flex">
                            <Input
                                type="text"
                                className="form-control w-100"
                                placeholder={tBuySell("receive")}
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <span
                                className="input-group-text w-50 border-0 text-decoration-none bg-white"
                                id="pay"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22.6393 12.6354C22.6393 18.8716 17.5832 23.9277 11.3443 23.9286C5.10993 23.9286 0.0537845 18.8716 0.054688 12.6345C0.0528809 6.39746 5.10903 1.34131 11.3461 1.34131C17.5832 1.34131 22.6393 6.39836 22.6393 12.6354Z"
                                        fill="#FABE3C"
                                    />
                                    <path
                                        d="M15.7924 9.86882C15.6469 8.35631 14.3413 7.84943 12.6915 7.70486V5.60596H11.4148V7.64884C11.0796 7.64884 10.7362 7.65517 10.3956 7.6624V5.60596H9.11893L9.11803 7.70306C8.84155 7.70848 8.56959 7.7139 8.30485 7.7139V7.70757L6.54387 7.70667V9.071C6.54387 9.071 7.48716 9.05293 7.47089 9.0701C7.98862 9.0701 8.15667 9.37007 8.20546 9.62939V12.0201C8.2416 12.0201 8.28768 12.0219 8.34009 12.0292H8.20546L8.20456 15.3786C8.18197 15.5412 8.0862 15.8005 7.72478 15.8014C7.74105 15.8159 6.79686 15.8014 6.79686 15.8014L6.54297 17.3266H8.20546C8.51447 17.3266 8.81896 17.332 9.11712 17.3338L9.11803 19.4562H10.3938V17.3564C10.7435 17.3636 11.0823 17.3663 11.4139 17.3663L11.413 19.4562H12.6897V17.3383C14.8365 17.2154 16.3408 16.6742 16.527 14.6575C16.6779 13.0339 15.9144 12.3084 14.6955 12.0156C15.4373 11.6397 15.9008 10.9756 15.7924 9.86882ZM14.0052 14.4064C14.0052 15.9921 11.2901 15.8123 10.4236 15.8123V12.9996C11.2901 13.0014 14.0052 12.7529 14.0052 14.4064ZM13.4107 10.439C13.4107 11.8819 11.1446 11.7129 10.4236 11.7138V9.16407C11.1455 9.16407 13.4116 8.93457 13.4107 10.439Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M8.20703 11.9639H8.39677V12.1039H8.20703V11.9639Z"
                                        fill="white"
                                    />
                                </svg>
                                BTC
                            </span>
                        </div>
                        <button className={`btn ${color} rounded-pill`} onClick={changeColor}>
                            {tBuySell(`${condition}`)}
                        </button>

                    </div>
                </div>
            </div>
            <BalanceContainer />
        </div>
    )
}

export default BuySellContainer