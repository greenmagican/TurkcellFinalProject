"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import { useAuthState } from "../../../app/services/authServices";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import Button from "@/components/atoms/Button/Button";
import NavLinksRight from "@/components/molecules/NavLinksRight/NavLinksRight";
import NavLinksLeft from "@/components/molecules/NavLinksLeft/NavLinksLeft";


const Navbar = () => {

  const changeLocale = async (newLocale: string) => {
    const router = useRouter();

    await fetch('/api/set-locale', {
      method: 'POST',
      body: JSON.stringify({ locale: newLocale }),
      headers: { 'Content-Type': 'application/json' },
    });

    router.refresh(); // Yönlendirme gerekmeden sayfayı yeniden yükler
  };
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const user = useAuthState();

  const tLeft = useTranslations("Navbar.left");
  const tRight = useTranslations("Navbar.right");

  const [selectedLanguage, setSelectedLanguage] = useState(locale);
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    setSelectedLanguage(nextLocale);

    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const newPath = segments.join("/");

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid fix-navbar">
        <Link className="navbar-brand d-flex align-items-center" href={`/${locale}/homepage`}>
          <Image src="/assets/header/frame.svg" alt="Logo" width={32} height={32} />
          <span className="header-rocket market-title">{tLeft("header")}</span>
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
