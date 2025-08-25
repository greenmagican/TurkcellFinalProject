import React from 'react'

import Image from 'next/image'

import BtcImage from '@/components/atoms/BtcImage/BtcImage'
import { BtcImageInterface } from '@/interfaces/BtcImageInterface'
import { ButtonInterface } from '@/interfaces/ButtonInterface'
import { BtcDataInterface } from '@/interfaces/BtcDataInterface'

type BtcCardProps = BtcImageInterface & BtcDataInterface;


const BtcCard: React.FC<BtcCardProps> = ({ src, alt, price, amount, change, title, subtitle }) => {
    return (
        <div className="card border-1 rounded-5 shadow-sm">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <BtcImage src={src} alt={alt}></BtcImage>
                    <h6 className="market-title mx-2 mt-2 fw-bold ">{title} </h6>
                    <p className="text-secondary small mt-3">{subtitle}</p>
                </div>
                <div className="d-flex flex-column">
                    <div className="my-3">
                        <h4 className="fw-bold usd">USD ${price}</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="amount">{amount}</div>
                        <div className={`${change > 0 ? "bg-success" : "bg-danger"} badge rounded-pill text-center ms-2`}>
                            {change}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BtcCard