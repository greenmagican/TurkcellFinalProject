"use client";
import React, { useEffect, useState } from "react";
import "./loginpage.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import useLoginPage from "@/hooks/useLoginPage";
import Title from "@/components/atoms/Title/Title";
import Button from "@/components/atoms/Button/Button";

const LoginPage = () => {
  const t = useTranslations("login");
  const { login, error, handleInputChange, handleSubmit } = useLoginPage();

  return (
    <div className="container login-container py-5">
      <div className="d-flex justify-content-center">
        <div className="card login-card  border-0">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center">
              <Title as="h1" className="fw-bold mb-4 market-title">{t("title")}</Title>
              <Title as="h6" className="text-muted mb-3">{t("subtitle")}</Title>
            </div>
            <div className="d-flex align-items-center justify-content-center bg-success rounded-pill">
              <div className="circle d-flex justify-content-center align-items-center py-2">
                <Image src="/assets/header/kilit.png" alt="kilit" height={20} width={20} />
              </div>
              <Link href="/login">
                <span className="fw-bold text-light">{t("secure")}</span>
              </Link>
            </div>
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
            <form noValidate onSubmit={handleSubmit}>
              <div className="align-items-center mb-3">
                <label htmlFor="validationCustomEmail" className="form-label">
                  <p className="text">{t("email.label")}</p>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustomEmail"
                  required
                  value={login.email}
                  onChange={handleInputChange}
                  placeholder={t("email.placeholder")}
                />
                <div className="invalid-feedback">{t("email.invalid")}</div>
              </div>
              <div className="align-items-center">
                <label htmlFor="validationCustomPassword" className="form-label">
                  <p className="text">{t("password.label")}</p>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="validationCustomPassword"
                  required
                  value={login.password}
                  onChange={handleInputChange}
                  placeholder={t("password.placeholder")}
                />
                <div className="invalid-feedback">{t("password.invalid")}</div>
              </div>
              {error && (
                <div className="mt-3">
                  <div className="alert alert-danger">{error}</div>
                </div>
              )}
              <div>
                <Button className="btn btn-primary rounded-pill w-100 mt-4" type="submit">
                  {t("submit")}
                </Button>
              </div>
              <div className="text-center mt-5">
                <p>
                  {t("notMember")}{" "}
                  <Link href="/register">
                    <span className="text-primary">{t("register")}</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
