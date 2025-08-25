import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LinksList from "@/components/molecules/FooterLinks/LinksList";

const Footer = () => {

  const tFooter = useTranslations("Footer");
  const tFooterPart1 = tFooter.raw("part1");
  const tFooterPart2 = tFooter.raw("part2");
  const tFooterPart3 = tFooter.raw("part3");
  const tFooterPart4 = tFooter.raw("part4");


  return (
    <>
      <footer className="container ">
        <div className="container py-5">
          <div className="row ">
            <div className="col col-md-4 mb-4 mb-md-0">
              <div className="d-flex align-items-center gap-2">
                <Image
                  src="/assets/header/Frame.svg"
                  alt="Frame"
                  width={52}
                  height={52}
                />
                <div>
                  <h3 className="fw-bold mt-2">Rocket</h3>
                </div>
              </div>
              <p className="mb-2 fw-bold fs-4 mt-3">{tFooter("title")}</p>
              <p className="mb-2 fs-6 lh-base">{tFooter("phone")}</p>
              <p className="mb-2 fs-6 lh-base">{tFooter("email")}</p>
              <p className="mb-4 fs-6 lh-base">
                {tFooter("copyright")}
              </p>
            </div>

            <div className="col col-md-2 mt-2 mb-md-0">
              <h6 className="text-uppercase fw-bold mb-3">{tFooter("products")}</h6>

              <LinksList links={tFooterPart1}></LinksList>

            </div>
            <div className="col col-md-2 mt-2 mb-md-0">
              <h6 className="text-uppercase fw-bold mb-3">{tFooter("services")}</h6>
              <LinksList links={tFooterPart2}></LinksList>

            </div>

            <div className="col col-md-2 mt-2 mb-md-0">
              <h6 className="text-uppercase fw-bold mb-3">{tFooter("support")}</h6>
              <LinksList links={tFooterPart3}></LinksList>

            </div>

            <div className="col col-md-2 mt-2 mb-md-0">
              <h6 className="text-uppercase fw-bold mb-3"> {tFooter("about")}</h6>
              <LinksList links={tFooterPart4}></LinksList>

            </div>
          </div>
        </div>


      </footer>
      <section className="bg-body-tertiary">
        <div className="container">
          <div className="row  ">
            <div className="col-md-6">
              <p className="small text-secondary">
                {tFooter("copyright")}
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end">
                <Link href="/homepage" className="me-3 text-secondary">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link href="/homepage" className="me-3 text-secondary">
                  <i className="bi bi-twitter"></i>
                </Link>
                <Link href="/homepage" className="me-3 text-secondary">
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link href="/homepage" className="text-secondary">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>

  );
};

export default Footer;
