import React from 'react'
import { Star } from "lucide-react";
import { useTranslations } from 'next-intl';

const PriceChange = () => {

    const tPriceChange = useTranslations("MarketDashboard.PriceChange");
    const changeData = [
        { pair: "ETH/BTC", price: "0.022572", change: "+1.54%", changeType: "positive" },
        { pair: "XRP/BTC", price: "0.020371", change: "+1.54%", changeType: "positive" },
        { pair: "USDT/BTC", price: "0.020371", change: "-1.54%", changeType: "negative" },
        { pair: "BNB/BTC", price: "0.022572", change: "+1.54%", changeType: "positive" },
        { pair: "SOL/BTC", price: "0.020371", change: "+1.54%", changeType: "positive" },
        { pair: "ADA/BTC", price: "0.022572", change: "+1.54%", changeType: "positive" },
        { pair: "LTC/BTC", price: "0.023572", change: "-1.54%", changeType: "negative" },
        { pair: "NEO/BTC", price: "0.032378", change: "+1.54%", changeType: "positive" },
        { pair: "MAP/BTC", price: "0.023572", change: "-1.54%", changeType: "negative" },
        { pair: "GO/BTC", price: "0.023572", change: "-1.54%", changeType: "negative" },
        { pair: "DBC/BTC", price: "0.032378", change: "+1.54%", changeType: "positive" },
        { pair: "XMR/BTC", price: "0.032378", change: "+1.54%", changeType: "positive" },

    ];
    return (
        <div className="card">

            <div className="card-header d-flex justify-content-between align-items-center">

                <Star />
                <button className='btn btn-primary rounded-pill'>BTC</button>
                <button className='btn btn-secondary rounded-pill'>ETH</button>
                <button className='btn btn-secondary rounded-pill'>USDT</button>
            </div>

            <div className="card-body">
                <div className="table-responsive-sm">
                    <table className="table table-hover table-borderless custom-gap">
                        <thead>
                            <tr>
                                <th scope="col">{tPriceChange("pair")}</th>
                                <th className=" text-center" scope="col">
                                    {tPriceChange("lastPrices")}
                                </th>
                                <th className="text-center" scope="col">
                                    {tPriceChange("changes")}
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {changeData.map((order, index) => (
                                <tr key={index} className={`text-center`}>
                                    <td className="text-start">
                                        <Star className="me-2" />{order.pair}</td>
                                    <td>{order.price}</td>
                                    <td className={`fw-bold ${order.changeType === "positive" ? "text-success" : "text-danger"}`}>
                                        {order.change}
                                    </td>


                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default PriceChange