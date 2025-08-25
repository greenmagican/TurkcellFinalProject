import React from 'react'
import Image from 'next/image'
import { BtcImageInterface } from '@/interfaces/BtcImageInterface'


const BtcImage: React.FC<BtcImageInterface> = ({ src, alt }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={24}
            height={24}
        />
    )
}

export default BtcImage