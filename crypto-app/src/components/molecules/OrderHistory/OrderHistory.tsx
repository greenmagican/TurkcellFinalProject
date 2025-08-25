import React from 'react'
import { CircleCheckBig, CircleX } from "lucide-react";
import styles from "./stylesTable.module.scss";

import { useState } from "react";
import { useTranslations } from 'next-intl';

const OrderHistory = () => {

    const [activeTab, setActiveTab] = useState("tab1");
    const tOrderHistory = useTranslations("MarketDashboard.OrderHistory")
    const orderHistoryData = [
        {
            time: "24-04 14:40",
            pair: "BTC/ETH",
            type: "BUY",
            price: "24,547.26",
            status: <CircleCheckBig className="text-success" />,
            date: "2023-10-01 12:00",
        },
        {
            time: "24-04 14:40",
            pair: "BTC/ETH",
            type: "SELL",
            price: "7,611.04",
            status: <CircleX className="text-danger" />,
            date: "2023-10-01 12:05",
        },
        {
            time: "24-04 14:40",
            pair: "BTC/ETH",
            type: "BUY",
            price: "24,547.26",
            status: <CircleCheckBig className="text-success" />,
            date: "2023-10-01 12:00",
        },
        {
            time: "24-04 14:40",
            pair: "BTC/ETH",
            type: "SELL",
            price: "7,611.04",
            status: <CircleX className="text-danger" />,
            date: "2023-10-01 12:05",
        },
        {
            time: "24-04 14:40",
            pair: "BTC/ETH",
            type: "BUY",
            price: "24,547.26",
            status: <CircleCheckBig className="text-success" />,
            date: "2023-10-01 12:00",
        },
        {
            time: "24-04 14:40",
            pair: "BTC/ETH",
            type: "SELL",
            price: "7,611.04",
            status: <CircleX className="text-danger" />,
            date: "2023-10-01 12:05",
        },
    ];
    return (
        <section className="order-history my-5">
            <div className="card border-2 border-secondary border-opacity-50 ">
                <div className="card-header d-flex justify-content-between">
                    <div className="left-buttons ">
                        <ul className="nav-underline nav gap-5 ">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === "tab1" ? "active" : ""
                                        }`}
                                    onClick={() => setActiveTab("tab1")}
                                >
                                    <h5>{tOrderHistory("openOrders")}</h5>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === "tab2" ? "active" : ""
                                        }`}
                                    onClick={() => setActiveTab("tab2")}
                                >
                                    <h5>{tOrderHistory("closedOrders")}</h5>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === "tab3" ? "active" : ""
                                        }`}
                                    onClick={() => setActiveTab("tab3")}
                                >
                                    <h5>{tOrderHistory("closedOrders")}</h5>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="history-search">
                        <div className="input-group ">
                            <input
                                type="text"
                                className="form-control rounded-pill  "
                                placeholder={tOrderHistory("searchPlaceholder")}
                            />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-borderless custom-gap">
                            <thead>
                                <tr>
                                    <th scope="col">{tOrderHistory("date")}</th>
                                    <th className=" text-center" scope="col">
                                        {tOrderHistory("pair")}
                                    </th>
                                    <th className="text-center" scope="col">
                                        {tOrderHistory("type")}{" "}
                                    </th>
                                    <th className="text-center" scope="col">
                                        {tOrderHistory("price")}
                                    </th>
                                    <th className="text-center" scope="col">
                                        {tOrderHistory("executed")}
                                    </th>
                                    <th className="text-end" scope="col">
                                        {tOrderHistory("total")}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderHistoryData.map((order, index) => (
                                    <tr key={index} className={`text-center ${styles.tableRow}`}>
                                        <td className="text-start">{order.time}</td>
                                        <td>{order.pair}</td>
                                        <td>{order.type}</td>
                                        <td>{order.price}</td>
                                        <td>{order.status}</td>
                                        <td className="text-end">{order.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderHistory