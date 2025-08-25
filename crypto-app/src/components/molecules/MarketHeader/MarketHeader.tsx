import React from 'react'

interface MarketHeaderProps {
    tMarket: string,

}

const MarketHeader: React.FC<MarketHeaderProps> = ({ tMarket }) => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h3">{tMarket}</h1>
            <a href="#" className="text-decoration-none">
                {tMarket}
            </a>
        </div>
    )
}
export default MarketHeader