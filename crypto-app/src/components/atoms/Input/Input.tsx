import React from 'react'

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string; // "text", "password" vs. default zaten var
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}



const Input: React.FC<InputInterface> = (
    { className, placeholder, value, onChange, type }
) => {

    return (
        <input type={type}
            className={` ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input