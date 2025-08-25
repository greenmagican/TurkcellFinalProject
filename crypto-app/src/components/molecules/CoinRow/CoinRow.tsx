import Button from '@/components/atoms/Button/Button';
import { Coin } from '@/hooks/useMarketTrends';
import React from 'react'
import { Sparklines, SparklinesLine } from "react-sparklines";
interface CoinRowProps {
    coin: Coin,
    tMarketTrends: string

}
const CoinRow: React.FC<CoinRowProps> = ({ coin, tMarketTrends }) => {
    return (
        <tr key={coin.symbol}>
            <td>
                <div className="d-flex align-items-center">
                    <img
                        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                        alt={coin.name}
                        width={32}
                        height={32}
                        className="me-2"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src =
                                "https://cryptoicons.org/api/icon/generic/32";
                        }}
                    />
                    <div>
                        <div className="fw-bold">{coin.name}</div>
                        <div className="text-muted">
                            {coin.symbol.replace("USDT", "")}
                        </div>
                    </div>
                </div>
            </td>

            <td>
                $
                {parseFloat(coin.high_24h).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}
            </td>
            <td>
                $
                {parseFloat(coin.low_24h).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}
            </td>
            <td
                className={
                    parseFloat(coin.change_24h) >= 0
                        ? "text-success"
                        : "text-danger"
                }
            >
                {parseFloat(coin.change_24h) >= 0 ? "+" : ""}
                {parseFloat(coin.change_24h).toFixed(2)}%
            </td>
            <td>
                ${(parseFloat(coin.turnover_24h) / 1000000).toFixed(2)}M
            </td>
            <td style={{ width: "120px" }}>
                {coin.sparkline && coin.sparkline.length > 0 ? (
                    <Sparklines
                        data={coin.sparkline}
                        limit={10}
                        width={80}
                        height={28}
                    >
                        <SparklinesLine
                            color="blue"
                            style={{ strokeWidth: 2, fill: "none" }}
                        />
                    </Sparklines>
                ) : (
                    <span className="text-muted">No data</span>
                )}
            </td>

            <td>
                <button className="btn btn-primary btn-sm rounded-pill">
                    {tMarketTrends}
                </button>
            </td>
        </tr>
    )
}

export default CoinRow