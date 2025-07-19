import React from "react";
import RegisterContent from "../pages/registerRockie/components/organism/registerContent/RegisterContent";
import Calltoaction from "../pages/homePage/components/organisms/calltoaction/Calltoaction";
import Breadcrumb from "../pages/registerRockie/components/organism/breadcrumb/Breadcrumb";
import Navbar from "../pages/homePage/components/organisms/navbar/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb header={"Register"} />
      <RegisterContent />
      <Calltoaction />
    </>
  );
};

export default Register;
