import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
              <p className="mb-2 fw-bold fs-4 mt-3">Let's talk! 👍</p>
              <p className="mb-2 fs-6 lh-base">+90 535 930 7942</p>
              <p className="mb-2 fs-6 lh-base">egemenaksoz98@gmail.com</p>
              <p className="mb-4 fs-6 lh-base">
                Copyright © 2023 Free For Earth's People
              </p>
            </div>

            <div className="col col-md-2 mt-2 mb-md-0">
              <h6 className="text-uppercase fw-bold mb-3">Products</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Spot
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Invoice Perpetual
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    USDT Perpetual
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Exchange
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Launchpad
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Binance Pay
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col col-md-2 mt-2 mb-md-0">
              <h6 className="text-uppercase fw-bold mb-3">Services</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Buy Crypto
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Markets
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Trending Fee
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Affiliate Program
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Referral Program
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col col-md-2 mt-2 mb-md-0">
              <h6 className="text-uppercase fw-bold mb-3">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Right Learn
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Help Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    User Feedback
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Submit A Request
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    API Documentation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Trading Rules
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col col-md-2 mt-2 mb-md-0">
              <h6 className="text-uppercase fw-bold mb-3">About Us</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    About Rocket
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Authenticity Check
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Business Contacts
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="text-decoration-none text-secondary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </footer>
      <section className="bg-body-tertiary">
        <div className="container">
          <div className="row  ">
            <div className="col-md-6">
              <p className="small text-secondary">
                Copyright © 2023 Free For Earth's People
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end">
                <Link href="#" className="me-3 text-secondary">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link href="#" className="me-3 text-secondary">
                  <i className="bi bi-twitter"></i>
                </Link>
                <Link href="#" className="me-3 text-secondary">
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link href="#" className="text-secondary">
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
