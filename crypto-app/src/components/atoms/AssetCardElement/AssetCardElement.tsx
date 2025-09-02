import React from 'react'
interface AssetCardElementProps {
    svg: React.ReactNode,
    title: string,
    amount: string,
    usd: string,
    change: string,

}
const AssetCardElement: React.FC<AssetCardElementProps> = ({ title, amount, change, usd, svg }) => {
    return (
        <div className="list-assets d-flex flex-column ">
            <div className="btc d-flex justify-content-between my-3">
                <div className="btc-info d-flex justify-content-between  ">
                    {svg}

                    <div className="coin-desc d-flex flex-column mx-2">
                        <h3 className="market-title">{title}</h3>
                        <span className="text-secondary">{usd}</span>
                    </div>
                </div>
                <div className="monet-btc d-flex flex-column">
                    <h4 className="fw-bold usd">{amount}</h4>
                    <span className="text-success">{change}</span>
                </div>
            </div>
        </div>



    )
}

export default AssetCardElement