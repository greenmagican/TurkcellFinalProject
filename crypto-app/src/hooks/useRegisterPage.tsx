import React, { useEffect } from 'react'
import { registerSchemas } from '../../schemas';
import { registerWithEmail } from '../../firebase/authControl';
import { useFormik } from 'formik';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

interface myRegisterInfo {
    email: string;
    password: string;
    confirmPassword: string;
    nickname: string;
    country: string;
    phone: string;
    uid: string;
}


const useRegisterPage = () => {


    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik<myRegisterInfo>({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            nickname: '',
            country: '',
            phone: '',
            uid: '',
        },
        validationSchema: registerSchemas,
        onSubmit: async (values) => {
            const user = await registerWithEmail(values.email, values.password);
            await setDoc(doc(db, "crypto-users", user.uid), {
                nickname: values.nickname,
                country: values.country,
                phone: values.phone,
                uid: user.uid,
                email: values.email,
                password: values.password,
            });
            alert("Registration successful!");
        }
    });

    useEffect(() => {
        const forms = document.querySelectorAll(".needs-validation");
        Array.from(forms).forEach((form) => {
            form.addEventListener("submit", (event) => {
                if (!(form as HTMLFormElement).checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });

        return () => {
            Array.from(forms).forEach((form) => {
                form.removeEventListener("submit", () => { });
            });
        };
    }, []);

    return (
        {
            values,
            errors,
            handleBlur,
            handleChange,
            handleSubmit
        }
    )
}

export default useRegisterPage