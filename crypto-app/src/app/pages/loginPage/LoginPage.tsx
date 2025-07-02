"use client";
import React from "react";
import { useEffect, useState } from "react";
import "./loginpage.scss";
import Image from "next/image";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase/firebase";
import { useRouter } from "next/navigation";

const LoginPage = () => {
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
      setError(err.message || "Login failed");
      alert("Email or Password is wrong !");
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
    <>
      <div className="container py-5">
        <div className=" d-flex justify-content-center">
          <div className="card border-0">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center ">
                <h1 className="fw-bold mb-4">Login To Rockie</h1>
                <h6 className="text-muted mb-3">Welcome back! Log In now to start trading</h6>
              </div>
              <div className="d-flex align-items-center justify-content-center bg-success rounded-pill">
                <div className="circle d-flex justify-content-center align-items-center py-2 ">
                  <Image src="/assets/header/kilit.png" alt="kilit" height={20} width={20}></Image>
                </div>
                <Link href="/login">
                  <span className="fw-bold text-light">https://accounts.rockie.com/login</span>
                </Link>
              </div>

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


              <form noValidate onSubmit={handleSubmit}>
                <div className=" align-items-center mb-3 mb-sm-0">
                  <label htmlFor="validationCustomEmail" className="form-label">
                    <p className="text">Email/ID</p>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="validationCustomEmail"
                    required
                    value={login.email}
                    onChange={handleInputChange}
                    placeholder="Please fill in the email form"
                  />
                  <div className="invalid-feedback">Please enter valid e-mail !!</div>
                </div>
                <div className="align-items-center">
                  <label htmlFor="validationCustomPassword" className="form-label">
                    <p className="text">Password</p>
                  </label>
                  <input
                    placeholder="Please enter a password"
                    type="password"
                    className="form-control"
                    id="validationCustomPassword"
                    required
                    value={login.password}
                    onChange={handleInputChange}
                  />
                  <div className="invalid-feedback">
                    (8 or more characters, including numbers and special characters)
                  </div>
                </div>
                {error && (
                  <div >
                    <div className="alert alert-danger">{error}</div>
                  </div>
                )}
                <div>
                  <button className="btn btn-primary rounded-pill w-100 mt-4" type="submit">
                    Login
                  </button>
                </div>
                <div className=" text-center mt-5">
                  <p>
                    Not A Member?
                    <Link href="/register">
                      <span className="text-primary">Register</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default LoginPage;
