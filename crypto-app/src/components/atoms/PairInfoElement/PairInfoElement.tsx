import React from 'react'

interface PairInfoElementProps {
    svg: React.ReactNode,
    text: string
    amount: string
}

const PairInfoElement: React.FC<PairInfoElementProps> = ({ svg, text, amount }) => {
    return (
        <div className="col col-12 col-sm-6 col-md-3 col-lg-2">
            <h3 className="text-secondary ">
                <span className="me-2">
                    {svg}
                </span>
                {text}
            </h3>
            ,
            <div className="last-price d-flex flex-wrap">
                <h3 className="fs-3 fw-bold text-dark me-2">{amount}</h3>
            </div>
        </div>
    )
}

export default PairInfoElement
