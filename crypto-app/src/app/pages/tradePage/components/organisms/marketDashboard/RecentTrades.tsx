import React from 'react'

const RecentTrades = () => {

    const recentTrades = [
        { time: "14:04:54", price: 0.022572, amount: 1.262415, type: "red" },
        { time: "14:04:54", price: 0.020371, amount: 1.262415, type: "green" },
        { time: "14:04:54", price: 0.020371, amount: 1.262415, type: "green" },
        { time: "14:04:54", price: 0.022572, amount: 1.262415, type: "red" },
        { time: "14:04:54", price: 0.020371, amount: 1.262415, type: "green" },
        { time: "14:04:54", price: 0.022572, amount: 1.262415, type: "red" },
        { time: "14:04:54", price: 0.023572, amount: 1.262415, type: "green" },
        { time: "14:04:54", price: 0.032378, amount: 1.262415, type: "red" },
        { time: "14:04:54", price: 0.023572, amount: 1.262415, type: "green" },
        { time: "14:04:54", price: 0.023572, amount: 1.262415, type: "green" },
        { time: "14:04:54", price: 0.032378, amount: 1.262415, type: "red" },
        { time: "14:04:54", price: 0.032378, amount: 1.262415, type: "red" },

    ];

    return (
        <div className="card">

            <div className="card-header">
                <h4 className='fw-bold'>Recent Trades</h4>
            </div>

            <div className="card-body">
                <div className="table-responsive-sm">
                    <table className="table table-hover table-borderless custom-gap">
                        <thead>
                            <tr>
                                <th scope="col">Time</th>
                                <th className=" text-center" scope="col">
                                    Price(BTC)
                                </th>
                                <th className="text-center" scope="col">
                                    Amount(ETH)
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {recentTrades.map((order, index) => (
                                <tr key={index} className={`text-center`}>
                                    <td className="text-start">{order.time}</td>
                                    <td className={`fw-bold ${order.type === "green" ? "text-success" : "text-danger"}`}>
                                        {order.price}
                                    </td>

                                    <td>{order.amount}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default RecentTrades