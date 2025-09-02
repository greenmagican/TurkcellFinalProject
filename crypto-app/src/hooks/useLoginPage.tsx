import React, { useState } from 'react'

import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useTranslations } from 'next-intl';


const useLoginPage = () => {

    const [login, setLogin] = useState({ email: "", password: "" });
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const t = useTranslations("login");



    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setLogin((prev) => ({
            ...prev,
            [id.replace("validationCustom", "").toLowerCase()]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                login.email,
                login.password
            );
            alert("Login successful!");
            router.push("/homepage");
        } catch (err: any) {
            setError(err.message || t("error"));
            alert(t("error"));
        }
    };

    return (
        {
            handleInputChange,
            handleSubmit,
            login,
            error
        }
    )
}

export default useLoginPage