import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const About = () => {
  const tAbout = useTranslations("About");
  return (
    <div className="container p-5 ">
      <div className="row">
        <div className="col  d-lg-flex d-none ">
          <Image
            src="/assets/header/aboutlaptop.svg"
            width={500}
            height={500}
            alt="aboutlaptop"
          ></Image>
        </div>
        <div className="col mt-5 ">
          <div>
            <h2 className="fw-bold fs-1">{tAbout("title")}</h2>
            <p className="text-secondary fs-5">
              {tAbout("desc")}
            </p>
            <h5 className="fw-bold">
              <Image
                src="/assets/header/mavitik.svg"
                alt="mavitik"
                height={20}
                width={20}
              ></Image>
              {tAbout("feature1")}            </h5>
            <p className="text-secondary fs-6">
              {tAbout("desc")}
            </p>
            <h5 className="fw-bold ">
              <Image
                src="/assets/header/mavitik.svg"
                alt="mavitik"
                height={20}
                width={20}
              ></Image>
              {tAbout("feature2")}
            </h5>
            <p className="text-secondary fs-6">
              {tAbout("desc")}
            </p>
            <button className="btn btn-primary rounded-pill mt-4">
              {tAbout("button")}
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;
