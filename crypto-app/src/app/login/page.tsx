import React from "react";
import Breadcrumb from "../pages/registerRockie/components/organism/breadcrumb/Breadcrumb";
import LoginPage from "../pages/loginPage/LoginPage";
import Navbar from "../pages/homePage/components/organisms/navbar/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb header={"Login"} />
      <LoginPage />
    </>
  );
};

export default Login;
