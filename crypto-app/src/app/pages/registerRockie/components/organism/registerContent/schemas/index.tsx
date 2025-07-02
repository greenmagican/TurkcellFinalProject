import * as yup from "yup";


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const nicknameRules = /^[a-zA-Z0-9]+$/;


export const registerSchemas = yup.object().shape({
    email: yup.string().email("Please enter a valid email address").required("Required"),
    password: yup.string().min(5).matches(passwordRules, "Please enter a valid password"),
    phone: yup.number().positive().integer().required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Password must match !").required("Required"),
    nickname: yup.string().matches(nicknameRules, "Nickname must not contain special characters"),
    country: yup
        .string()
        .required("Required"),

}) 
