import React from 'react'
import { CircleCheckBig, CircleX } from "lucide-react";
import styles from "./stylesTable.module.scss";
import { useTranslations } from 'next-intl';
import OrderHistoryButtons from '../OrderHistoryButtons/OrderHistoryButtons';
const OrderHistory = () => {

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
                <OrderHistoryButtons />
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