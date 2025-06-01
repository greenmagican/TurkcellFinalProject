import React from 'react'

const ChartInfos = () => {
    return (
        <div className="chart-infos d-flex justify-content-between p-5">
            <h2>Trading Market</h2>
            <div className="history d-flex flex-wrap">
                <h3 className="me-4">1m</h3>
                <h3 className="me-4">5m</h3>
                <span className="batch rounded me-4 bg-primary d-flex align-items-center">
                    <h3 className="">15m</h3>
                </span>

                <h3 className="me-4">4h</h3>
                <h3 className="me-4">D</h3>
                <h3 className="me-4">W</h3>
                <h3 className="me-4">M</h3>
                <h3>Y</h3>
            </div>
        </div>
    )
}

export default ChartInfos