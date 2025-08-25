import React from 'react'


interface CoinInfoProps {
    name: string,
    symbol: string,
    id: number,
    alt: string

}

const CoinInfo: React.FC<CoinInfoProps> = ({ name, symbol, id, alt }) => {
    return (
        <>
            <img
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
                alt={alt}
                width={32}
                height={32}
                className="me-2"
            />
            <div>
                <div className="fw-bold">{name}</div>
                <div className="text-muted">{symbol}</div>
            </div>

        </>
    )
}

export default CoinInfo