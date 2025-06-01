import React from 'react'

const OrderBook = () => {

    const orderBookData = [
        { price: 0.022572, amount: 1.262415, total: 15.19648 },
        { price: 0.023071, amount: 1.262415, total: 15.19648 },
        { price: 0.023572, amount: 1.262415, total: 15.19648 },
        { price: 0.023378, amount: 1.262415, total: 15.19648 },
        { price: 0.022573, amount: 1.262415, total: 15.19648 },
        { price: 0.020371, amount: 1.262415, total: 15.19648 },
        { price: 0.022572, amount: 1.262415, total: 15.19648 },
        { price: 0.023071, amount: 1.262415, total: 15.19648 },
        { price: 0.023572, amount: 1.262415, total: 15.19648 },
        { price: 0.023378, amount: 1.262415, total: 15.19648 },
        { price: 0.022573, amount: 1.262415, total: 15.19648 },
        { price: 0.020371, amount: 1.262415, total: 15.19648 }
    ];

    return (

        <div className="card">

            <div className="card-header d-flex ">
                <h4 className='fw-bold'>Order Book</h4>
            </div>

            <div className="card-body">
                <div className="table-responsive-sm">
                    <table className="table table-hover table-borderless custom-gap">
                        <thead>
                            <tr>
                                <th scope="col">Price(BTC)</th>
                                <th className=" text-center" scope="col">
                                    Amount(ETH)
                                </th>
                                <th className="text-center" scope="col">
                                    Total(BTC)
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {orderBookData.map((order, index) => (
                                <tr key={index} className={`text-center`}>
                                    <td className="text-start">{order.price}</td>
                                    <td>{order.amount}</td>
                                    <td>{order.total}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default OrderBook