"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import { useAuthState } from "../../../app/services/authServices";
import { useLocale } from "next-intl";
import Button from "@/components/atoms/Button/Button";
import NavLinksRight from "@/components/molecules/NavLinksRight/NavLinksRight";
import NavLinksLeft from "@/components/molecules/NavLinksLeft/NavLinksLeft";


const Navbar: React.FC = () => {

  const locale = useLocale();
  const user = useAuthState();

  return (
    <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid fix-navbar">
        <Link className="navbar-brand d-flex align-items-center" href={`/${locale}/homepage`}>
          <Image src="/assets/header/frame.svg" alt="Logo" width={32} height={32} />
          <span className="header-rocket market-title">Rocket</span>
        </Link>
        <Button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <NavLinksLeft user={user} loading={false} error={undefined}></NavLinksLeft>
          <NavLinksRight user={user} loading={false} error={undefined}></NavLinksRight>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
