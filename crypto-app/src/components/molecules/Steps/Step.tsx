import React from 'react'
import Image from 'next/image'

interface StepInterface {
    header: string,
    name: string,
    image: string,
    exp: string

}


const Step: React.FC<StepInterface> = ({ header, name, image, exp }) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <Image
                src={image}
                alt="cloud"
                width={100}
                height={100}
            />
            <div className="text-center">
                <p className="text-secondary small">{name}</p>
                <p className="fs-4 fw-bold">{header}</p>
                <p className="fs-5 text-secondary">
                    {exp}
                </p>
            </div>
        </div>
    )
}

export default Step