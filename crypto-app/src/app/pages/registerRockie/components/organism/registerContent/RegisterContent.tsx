"use client";
import React, { useEffect, useState } from "react";
import "./registercontent.scss";
import Link from "next/link";
import { registerWithEmail } from "../../../../../../../firebase/authControl";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../../../firebase/firebase";
import { useFormik } from "formik";
import { registerSchemas } from "./schemas";
const RegisterContent = () => {

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

  console.log(errors);

  interface myRegisterInfo {
    email: string;
    password: string;
    confirmPassword: string;
    nickname: string;
    country: string;
    phone: string;
    uid: string;
  }

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
    <div className="container">
      <div className="card border-0">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center">
            <h1 className="register-header">Register To Rockie</h1>
            <h6 className="text-muted">
              Register in advance and enjoy the event benefits
            </h6>
            <div className="d-flex flex-column align-items-center mt-4">
              <div className="nav nav-pills">
                <div className="nav-item">
                  <button className="btn btn-primary rounded-pill mx-3">Email</button>
                </div>
                <div className="nav-item">
                  <button className="btn btn-outline-secondary rounded-pill">Mobile</button>
                </div>
              </div>
            </div>
          </div>

          <form noValidate onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-7">
                <label htmlFor="email" className="form-label">
                  <p className="text">Email/ID</p>
                </label>
                <div className=" d-flex">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    placeholder="Please fill the e-mail"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}

                  />

                  <div className="btn btn-primary ">Authenticate</div>

                </div>
                {errors.email && <p className="text-danger fw-bold">{errors.email}</p>}

              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-7 ">
                <label htmlFor="password" className="form-label">
                  <p className="text">Password <span className="small text-danger">(At least one number, one small letter, and one capital lettter)</span></p>
                </label>
                <input
                  placeholder="Please fill the password"
                  type="password"
                  className="form-control"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}

                />
                {errors.password && <p className="text-danger fw-bold">{errors.password}</p>}


              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-7 ">
                <label htmlFor="confirmPassword" className="form-label">

                </label>
                <input
                  placeholder="Please re-enter your password"
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}

                />
                {errors.confirmPassword && <p className="text-danger fw-bold">{errors.confirmPassword}</p>}


              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-7 ">
                <label htmlFor="nickname" className="form-label">
                  <p className="text">Nick Name <span className=" small text-danger">(Optional - Excluding special characters)</span></p>
                </label>
                <input
                  placeholder="Please enter the nickname  "
                  type="text"
                  className="form-control"
                  id="nickname"
                  value={values.nickname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.nickname && <p className="text-danger fw-bold">{errors.nickname}</p>}

              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-7">
                <label htmlFor="country" className="form-label">
                  <p className="text">Country</p>
                </label>
                <select
                  className="form-select"
                  id="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select country...</option>
                  <option value="UK">South Korea (+82)</option>
                  <option value="CA">Canada (+1)</option>
                  <option value="AU">Australia (+61)</option>
                  <option value="TR">Turkey (+90)</option>
                  <option value="DE">Germany (+49)</option>
                  <option value="FR">France (+33)</option>
                  <option value="JP">Japan (+81)</option>
                  <option value="CN">China (+86)</option>
                  <option value="IN">India (+91)</option>
                </select>
                {errors.country && <p className="text-danger fw-bold">{errors.country}</p>}

              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-7 mb-5">
                <label htmlFor="phone" className="form-label">
                  <p className="text">Phone</p>
                </label>
                <input
                  placeholder="Please enter the number"
                  type="text"
                  className="form-control"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && <p className="text-danger fw-bold">{errors.phone}</p>}

              </div>

              <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-7 mb-2">
                <button className="register-btn" type="submit">
                  Pre-Registration
                </button>
              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-7 ">
                <p className="text-muted text-center">
                  Already have an account?{" "}
                  <Link href="/login">
                    <span className="text-primary">Log In</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div >

    </div >
  );
};

export default RegisterContent;
