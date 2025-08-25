import React from "react";
import "./LearnEarnBlog.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LearnEarnBlog = () => {
  const tLearnEarn = useTranslations("LearnEarnBlog");
  return (
    <div className="container py-5">
      <div className="d-flex flex-column align-items-center">
        <h1 >{tLearnEarn("title")}</h1>
        <h5 className="text-body-tertiary">
          {tLearnEarn("subtitle")}
        </h5>
      </div>
      <div className="py-4 row">
        <div className="col-12 col-md-4">
          <div className="media-container d-flex justify-content-center align-items-center">
            <div className="play-button d-flex justify-content-center align-items-center">
              <Image
                src="/assets/header/play.svg"
                alt="play"
                width={12}
                height={14}
              ></Image>
            </div>
          </div>
          <div className="frame-1163">
            <button className="learn-button">
              <p className="button-text">{tLearnEarn("button")}</p>
            </button>
            <p className="learn-earn">
              {tLearnEarn("description")}
            </p>
            <div className="frame-823 d-flex justify-content-between ">
              <div className="floyd d-flex  ">
                <div className="green-circle"></div>
                <p className="floyd-name">{tLearnEarn("author")}</p>
              </div>
              <div className="date">
                <p>{tLearnEarn("date")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="media-container d-flex justify-content-center align-items-center">
            <div className="play-button d-flex justify-content-center align-items-center">
              <Image
                src="/assets/header/play.svg"
                alt="play"
                width={12}
                height={14}
              ></Image>
            </div>
          </div>
          <div className="frame-1163">
            <button className="learn-button">
              <p className="button-text">{tLearnEarn("button")}</p>
            </button>
            <p className="learn-earn">
              {tLearnEarn("description")}            </p>
            <div className="frame-823 d-flex justify-content-between ">
              <div className="floyd d-flex  ">
                <div className="green-circle"></div>
                <p className="floyd-name">{tLearnEarn("author")}</p>
              </div>
              <div className="date">
                <p>{tLearnEarn("date")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="media-container d-flex justify-content-center align-items-center">
            <div className="play-button d-flex justify-content-center align-items-center">
              <Image
                src="/assets/header/play.svg"
                alt="play"
                width={12}
                height={14}
              ></Image>
            </div>
          </div>
          <div className="frame-1163">
            <button className="learn-button">
              <p className="button-text">{tLearnEarn("button")}</p>
            </button>
            <p className="learn-earn">
              {tLearnEarn("description")}</p>
            <div className="frame-823 d-flex justify-content-between ">
              <div className="floyd d-flex  ">
                <div className="green-circle"></div>
                <p className="floyd-name">{tLearnEarn("author")}</p>
              </div>
              <div className="date">
                <p>{tLearnEarn("date")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnEarnBlog;
