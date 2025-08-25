import { useTranslations } from 'next-intl'
import React from 'react'

const ChartInfos = () => {
    const tChart = useTranslations("MarketDashboard.ChartInfos");
    return (
        <div className="chart-infos d-flex justify-content-between p-5">
            <h2> {tChart("title")}</h2>
            <div className="history d-flex flex-wrap">
                <h3 className="me-4">{tChart("1m")}</h3>
                <h3 className="me-4">{tChart("5m")}</h3>
                <span className="batch rounded me-4 bg-primary d-flex align-items-center">
                    <h3 className="">{tChart("15m")}</h3>
                </span>

                <h3 className="me-4">{tChart("4h")}</h3>
                <h3 className="me-4">{tChart("D")}</h3>
                <h3 className="me-4">{tChart("W")}</h3>
                <h3 className="me-4">{tChart("M")}</h3>
                <h3>{tChart("Y")}</h3>
            </div>
        </div>
    )
}

export default ChartInfos