import React from 'react'

interface TableHeadersProps {
    tMarketName: string,
    tMarketLast: string,
    tMarketCap: string,
    tMarketDays: string


}


const TableHeaders: React.FC<TableHeadersProps> = ({ tMarketName, tMarketLast, tMarketCap, tMarketDays }) => {
    return (
        <thead>
            <tr className="table-active">
                <th scope="col">#</th>
                <th scope="col">{tMarketName}</th>
                <th scope="col">{tMarketLast}</th>
                <th scope="col">24h %</th>
                <th scope="col">{tMarketCap}</th>
                <th scope="col">{tMarketDays}</th>
                <th scope="col"></th>
            </tr>
        </thead>
    )
}

export default TableHeaders