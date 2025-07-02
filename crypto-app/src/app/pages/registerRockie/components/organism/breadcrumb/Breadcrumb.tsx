"use client";
import React, { useEffect, useState } from "react";
import "./breadcrumb.scss";
import Link from "next/link";

interface BreadcrumbProps {
  header: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ header }) => {
  return (

    <div className="bg-body-secondary py-5">
      <div className="container">

        <div className=" 
    d-flex flex-row align-items-center justify-content-between">
          <div>
            <h1 className="fw-bold">{header}</h1>
          </div>
          <div className="d-flex">
            <Link href="/homepage">
              <p className="text-secondary me-2">Home</p>
            </Link>
            <span className="text-secondary">/</span>
            <Link href="/register">
              {" "}
              <p className="text-secondary ">Register</p>
            </Link>
          </div>
        </div>

      </div>

    </div>

  );
};

export default Breadcrumb;
