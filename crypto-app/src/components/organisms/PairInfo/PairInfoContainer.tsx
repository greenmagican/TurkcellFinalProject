import PairInfoElement from '@/components/atoms/PairInfoElement/PairInfoElement';
import { useTranslations } from 'next-intl'
import React from 'react'

const PairInfoContainer = () => {
    const tPairInfo = useTranslations("MarketDashboard.PairInfo");
    return (
        <section className="pair-info">
            <div className="p-3 btc-change d-flex align-items-center row ">
                <div className="col col-12 col-sm-6 col-md-3 col-lg-2">
                    <h3 className="text-dark fw-bold ">
                        BTC/USD
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ms-2"
                        >
                            <path
                                d="M6 9L12 15L18 9"
                                stroke="#23262F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </h3>
                </div>
                <div className="col col-12  col-sm-6 col-md-3 col-lg-2">
                    <h3 className="text-secondary ">{tPairInfo("price")}</h3>,
                    <div className="last-price d-flex flex-wrap">
                        <h3 className="fs-3 fw-bold text-danger me-2">0.08567</h3>
                        <h3 className="fs-3 fw-bold text-secondary">$26,000</h3>
                    </div>
                </div>
                <div className="col col-12  col-sm-6 col-md-3 col-lg-2">
                    <h3 className="text-secondary ">
                        <span className="me-2">
                            <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.4805 0C15.9945 0 20.4805 4.486 20.4805 10C20.4805 15.514 15.9945 20 10.4805 20C4.96647 20 0.480469 15.514 0.480469 10C0.480469 4.486 4.96647 0 10.4805 0ZM10.4805 1.5C5.79347 1.5 1.98047 5.313 1.98047 10C1.98047 14.687 5.79347 18.5 10.4805 18.5C15.1675 18.5 18.9805 14.687 18.9805 10C18.9805 5.313 15.1675 1.5 10.4805 1.5ZM10.1417 5.0954C10.5567 5.0954 10.8917 5.4314 10.8917 5.8454V10.2674L14.2967 12.2974C14.6517 12.5104 14.7687 12.9704 14.5567 13.3264C14.4157 13.5614 14.1667 13.6924 13.9117 13.6924C13.7807 13.6924 13.6487 13.6584 13.5277 13.5874L9.75767 11.3384C9.53167 11.2024 9.39167 10.9574 9.39167 10.6934V5.8454C9.39167 5.4314 9.72767 5.0954 10.1417 5.0954Z"
                                    fill="#777E90"
                                />
                            </svg>
                        </span>
                        {tPairInfo("change")}
                    </h3>
                    ,
                    <div className="last-price d-flex flex-wrap">
                        <h3 className="fs-3 fw-bold text-success me-2">
                            0.01447
                            <span className="badge bg-success ms-2 rounded-pill">
                                <svg
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.87243 7.90568C4.95659 8.06168 5.11662 8.15893 5.29068 8.15893H8.00097V13.5105C8.00097 13.7807 8.2152 14 8.47915 14C8.7431 14 8.95732 13.7807 8.95732 13.5105V8.15893H11.6676C11.8423 8.15893 12.0023 8.06168 12.0859 7.90568C12.1707 7.74969 12.1649 7.5591 12.0725 7.40832L8.88401 2.22845C8.79602 2.08616 8.64364 2 8.47915 2C8.31466 2 8.16228 2.08616 8.07429 2.22845L4.88582 7.40832C4.83737 7.48795 4.8125 7.57868 4.8125 7.6694C4.8125 7.75034 4.8329 7.83193 4.87243 7.90568Z"
                                        fill="white"
                                    />
                                </svg>
                                3.24%
                            </span>
                        </h3>
                    </div>
                </div>
                <PairInfoElement
                    svg={
                        <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.57427 11.8585C7.70051 12.0925 7.94055 12.2384 8.20164 12.2384H12.2671V20.2657C12.2671 20.671 12.5884 21 12.9843 21C13.3803 21 13.7016 20.671 13.7016 20.2657V12.2384H17.7671C18.0291 12.2384 18.2691 12.0925 18.3944 11.8585C18.5216 11.6245 18.513 11.3386 18.3743 11.1125L13.5916 3.34267C13.4597 3.12924 13.2311 3 12.9843 3C12.7376 3 12.509 3.12924 12.3771 3.34267L7.59436 11.1125C7.52167 11.2319 7.48438 11.368 7.48438 11.5041C7.48438 11.6255 7.51498 11.7479 7.57427 11.8585Z"
                                fill="#777E90"
                            />
                        </svg>
                    }
                    text={`${tPairInfo("high")} `}
                    amount="0.060069"
                />

                <PairInfoElement svg={<svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.9023 12.1415C17.7761 11.9075 17.536 11.7616 17.2749 11.7616L13.2095 11.7616L13.2095 3.73429C13.2095 3.32896 12.8881 3 12.4922 3C12.0963 3 11.775 3.32896 11.775 3.73429L11.775 11.7616L7.7095 11.7616C7.44746 11.7616 7.20742 11.9075 7.08214 12.1415C6.95494 12.3755 6.96355 12.6614 7.10222 12.8875L11.8849 20.6573C12.0169 20.8708 12.2455 21 12.4922 21C12.739 21 12.9675 20.8708 13.0995 20.6573L17.8822 12.8875C17.9549 12.7681 17.9922 12.632 17.9922 12.4959C17.9922 12.3745 17.9616 12.2521 17.9023 12.1415Z"
                        fill="#777E90"
                    />
                </svg>} text={`${tPairInfo("low")} ${" "}`}
                    amount="0.056864" />

                <PairInfoElement svg={<svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.436 1C20.063 1 22.5 3.546 22.5 7.335V16.165C22.5 19.954 20.063 22.5 16.436 22.5H7.064C3.437 22.5 1 19.954 1 16.165V7.335C1 3.546 3.437 1 7.064 1H16.436ZM16.436 2.5H7.064C4.292 2.5 2.5 4.397 2.5 7.335V16.165C2.5 19.103 4.292 21 7.064 21H16.436C19.209 21 21 19.103 21 16.165V7.335C21 4.397 19.209 2.5 16.436 2.5ZM7.1211 9.2025C7.5351 9.2025 7.8711 9.5385 7.8711 9.9525V16.8125C7.8711 17.2265 7.5351 17.5625 7.1211 17.5625C6.7071 17.5625 6.3711 17.2265 6.3711 16.8125V9.9525C6.3711 9.5385 6.7071 9.2025 7.1211 9.2025ZM11.7881 5.9185C12.2021 5.9185 12.5381 6.2545 12.5381 6.6685V16.8115C12.5381 17.2255 12.2021 17.5615 11.7881 17.5615C11.3741 17.5615 11.0381 17.2255 11.0381 16.8115V6.6685C11.0381 6.2545 11.3741 5.9185 11.7881 5.9185ZM16.3784 12.8275C16.7924 12.8275 17.1284 13.1635 17.1284 13.5775V16.8115C17.1284 17.2255 16.7924 17.5615 16.3784 17.5615C15.9644 17.5615 15.6284 17.2255 15.6284 16.8115V13.5775C15.6284 13.1635 15.9644 12.8275 16.3784 12.8275Z"
                        fill="#777E90"
                    />
                </svg>}
                    text={`${tPairInfo("volume")} ${" "}`}
                    amount='8,532.12 BTC'></PairInfoElement>

            </div>
        </section >
    )
}

export default PairInfoContainer