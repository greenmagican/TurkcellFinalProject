"use client";
import React, { useEffect } from "react";
import "./registercontent.scss";
import Link from "next/link";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { registerWithEmail } from "../../../firebase/authControl";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { registerSchemas } from "../../../schemas";

interface myRegisterInfo {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  country: string;
  phone: string;
  uid: string;
}

const RegisterContent = () => {
  const t = useTranslations("register");

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
    <div className="container">
      <div className="card border-0 register-card">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center">
            <h1 className="register-header amount">{t("title")}</h1>
            <h6 className="text-muted">{t("subtitle")}</h6>

            <div className="d-flex flex-column align-items-center mt-4">
              <div className="nav nav-pills">
                <div className="nav-item">
                  <button className="btn btn-primary rounded-pill mx-3">
                    {t("method.email")}
                  </button>
                </div>
                <div className="nav-item">
                  <button className="btn btn-outline-secondary rounded-pill">
                    {t("method.mobile")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <form noValidate onSubmit={handleSubmit}>
            <div className="row justify-content-center">


              <div className="col-lg-7">
                <label htmlFor="email" className="form-label">
                  <p className="text">{t("email.label")}</p>
                </label>
                <div className="d-flex">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    placeholder={t("email.placeholder")}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="btn btn-primary">
                    {t("email.authenticate")}
                  </div>
                </div>
                {errors.email && <p className="text-danger fw-bold">{errors.email}</p>}
              </div>

              <div className="col-lg-7">
                <label htmlFor="password" className="form-label">
                  <p className="text">
                    {t("password.label")}{" "}
                    <span className="small text-danger">
                      ({t("password.hint")})
                    </span>
                  </p>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder={t("password.placeholder")}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && <p className="text-danger fw-bold">{errors.password}</p>}
              </div>

              <div className="col-lg-7">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder={t("confirmPassword.placeholder")}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmPassword && (
                  <p className="text-danger fw-bold">{errors.confirmPassword}</p>
                )}
              </div>

              <div className="col-lg-7">
                <label htmlFor="nickname" className="form-label">
                  <p className="text">
                    {t("nickname.label")}{" "}
                    <span className="small text-danger">{t("nickname.hint")}</span>
                  </p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nickname"
                  placeholder={t("nickname.placeholder")}
                  value={values.nickname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.nickname && <p className="text-danger fw-bold">{errors.nickname}</p>}
              </div>

              <div className="col-lg-7">
                <label htmlFor="country" className="form-label">
                  <p className="text">{t("country.label")}</p>
                </label>
                <select
                  className="form-select"
                  id="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">{t("country.placeholder")}</option>
                  <option value="KR">{t("country.countries.KR")}</option>
                  <option value="CA">{t("country.countries.CA")}</option>
                  <option value="AU">{t("country.countries.AU")}</option>
                  <option value="TR">{t("country.countries.TR")}</option>
                  <option value="DE">{t("country.countries.DE")}</option>
                  <option value="FR">{t("country.countries.FR")}</option>
                  <option value="JP">{t("country.countries.JP")}</option>
                  <option value="CN">{t("country.countries.CN")}</option>
                  <option value="IN">{t("country.countries.IN")}</option>
                </select>
                {errors.country && <p className="text-danger fw-bold">{errors.country}</p>}
              </div>

              {/* PHONE */}
              <div className="col-lg-7 mb-5">
                <label htmlFor="phone" className="form-label">
                  <p className="text">{t("phone.label")}</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder={t("phone.placeholder")}
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && <p className="text-danger fw-bold">{errors.phone}</p>}
              </div>

              {/* SUBMIT BUTTON */}
              <div className="col-lg-7 mb-2">
                <button className="register-btn" type="submit">
                  {t("submit")}
                </button>
              </div>

              {/* LOGIN REDIRECT */}
              <div className="col-lg-7">
                <p className="text-muted text-center">
                  {t("alreadyHaveAccount")}{" "}
                  <Link href="/login">
                    <span className="text-primary">{t("login")}</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterContent;
