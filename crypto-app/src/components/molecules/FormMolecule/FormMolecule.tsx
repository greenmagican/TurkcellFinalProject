import { FormikErrors } from "formik";
import React from "react";

interface Values {
    email?: string;
}

interface FormMoleculeProps {
    id: string;
    type?: string;
    placeholder?: string;
    labelText: string;
    authText?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errors?: FormikErrors<Values>;
    children?: React.ReactNode;
    button?: React.ReactNode;
    option?: React.ReactNode;
}

const FormMolecule: React.FC<FormMoleculeProps> = ({
    id,
    type = "text",
    placeholder,
    labelText,
    value,
    onChange,
    onBlur,
    errors,
    authText,
    children,
    button,
    option
}) => {
    return (
        <div className="col-lg-7">
            <label htmlFor={id} className="form-label">
                <p className="text">{labelText}</p>
                {children}
            </label>
            <div className="d-flex">
                {option || (<input
                    type={type}
                    className="form-control"
                    id={id}
                    required
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                )}
                {button}
            </div>
            {errors?.[id as keyof Values] && (
                <p className="text-danger fw-bold">
                    {errors[id as keyof Values] as string}
                </p>
            )}
        </div>
    );
};

export default FormMolecule;
