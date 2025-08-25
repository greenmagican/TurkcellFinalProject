"use client";
import React, { useEffect, useState } from "react";
import "./loginpage.scss";
import Image from "next/image";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../../../firebase/firebase";
import { useTranslations } from "next-intl";

const LoginPage = () => {
  const t = useTranslations("login");
  const router = useRouter();

  const [login, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!(form as HTMLFormElement).checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });

    return () => {
      Array.from(forms).forEach((form) => {
        form.removeEventListener("submit", () => { });
      });
    };
  }, []);

  return (
    <div className="container login-container py-5">
      <div className="d-flex justify-content-center">
        <div className="card login-card   border-0">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center">
              <h1 className="fw-bold mb-4 market-title">{t("title")}</h1>
              <h6 className="text-muted mb-3">{t("subtitle")}</h6>
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

            <form noValidate onSubmit={handleSubmit}>
              {/* Email */}
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

              {/* Password */}
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

              {/* Error */}
              {error && (
                <div className="mt-3">
                  <div className="alert alert-danger">{error}</div>
                </div>
              )}

              {/* Submit */}
              <div>
                <button className="btn btn-primary rounded-pill w-100 mt-4" type="submit">
                  {t("submit")}
                </button>
              </div>

              {/* Register redirect */}
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
