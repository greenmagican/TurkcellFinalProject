"use client"

import React, { JSX } from 'react'
//import './Button.scss'

import { ButtonInterface } from "../../../interfaces/ButtonInterface";

const Button: React.FC<ButtonInterface> = ({
    type = "button",
    onClick,
    className,
    children,
    ...rest



}): JSX.Element => {
    return (
        <button type={type}
            onClick={onClick}
            className={` ${className}`}
            {...rest}>
            {children}

        </button>
    )
}

export default Button