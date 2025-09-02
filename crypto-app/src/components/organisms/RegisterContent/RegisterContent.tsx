"use client";
import React, { useEffect } from "react";
import "./registercontent.scss";
import Link from "next/link";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { registerWithEmail } from "../../../../firebase/authControl";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { registerSchemas } from "../../../../schemas";
import useRegisterPage from "@/hooks/useRegisterPage";
import FormMolecule from "@/components/molecules/FormMolecule/FormMolecule";
import Button from "@/components/atoms/Button/Button";
import Title from "@/components/atoms/Title/Title";

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

  const { values, errors, handleBlur, handleChange, handleSubmit } = useRegisterPage()

  return (
    <div className="container">
      <div className="card border-0 register-card">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center">
            <Title as="h1" className="register-header amount">{t("title")}</Title>
            <Title as="h6" className="text-muted">{t("subtitle")}</Title>
            <div className="d-flex flex-column align-items-center mt-4">
              <div className="nav nav-pills">
                <div className="nav-item">
                  <Button className="btn btn-primary rounded-pill mx-3">
                    {t("method.email")}
                  </Button>
                </div>
                <div className="nav-item">
                  <Button className="btn btn-outline-secondary rounded-pill">
                    {t("method.mobile")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <form noValidate onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <FormMolecule
                id="email"
                labelText={t("email.label")}
                type="email"
                placeholder={t("email.placeholder")}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                button={
                  <Button className="btn btn-primary">{t("email.authenticate")}</Button>
                }
                errors={errors}
              />
              <FormMolecule
                id="password"
                children={<span className="small text-danger">
                  ({t("password.hint")})
                </span>}
                labelText={t("password.label")}
                type="password"
                placeholder={t("password.placeholder")}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                authText={t("email.authenticate")}
                errors={errors}
              />

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

              <FormMolecule
                id="nickname"
                children={<span className="small text-danger">{t("nickname.hint")}</span>
                }
                labelText={t("nickname.label")}
                type="text"
                placeholder={t("nickname.placeholder")}
                value={values.nickname}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
              />

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

              <FormMolecule
                id="country"
                labelText={t("country.label")}
                option={<select
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
                }
                errors={errors}
              />

              <FormMolecule
                id="phone"
                labelText={t("phone.label")}
                type="text"
                placeholder={t("phone.placeholder")}
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
              />
              <div className="col-lg-7 mb-2">
                <Button className="register-btn" type="submit">
                  {t("submit")}
                </Button>
              </div>
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
