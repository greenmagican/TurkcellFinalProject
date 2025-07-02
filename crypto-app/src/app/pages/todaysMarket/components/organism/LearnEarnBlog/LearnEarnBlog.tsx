import React from "react";
import "./LearnEarnBlog.scss";
import Image from "next/image";

const LearnEarnBlog = () => {
  return (
    <div className="container py-5">
      <div className="d-flex flex-column align-items-center">
        <h1 >Learn And Earn</h1>
        <h5 className="text-body-tertiary">
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
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
              <p className="button-text">LEARN & EARN</p>
            </button>
            <p className="learn-earn">
              Learn about UI8 coin and earn an All-Access Pass
            </p>
            <div className="frame-823 d-flex justify-content-between ">
              <div className="floyd d-flex  ">
                <div className="green-circle"></div>
                <p className="floyd-name">Floyd Buckridge</p>
              </div>
              <div className="date">
                <p>Feb 03, 2021</p>
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
              <p className="button-text">LEARN & EARN</p>
            </button>
            <p className="learn-earn">
              Learn about UI8 coin and earn an All-Access Pass
            </p>
            <div className="frame-823 d-flex justify-content-between ">
              <div className="floyd d-flex  ">
                <div className="green-circle"></div>
                <p className="floyd-name">Floyd Buckridge</p>
              </div>
              <div className="date">
                <p>Feb 03, 2021</p>
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
              <p className="button-text">LEARN & EARN</p>
            </button>
            <p className="learn-earn">
              Learn about UI8 coin and earn an All-Access Pass
            </p>
            <div className="frame-823 d-flex justify-content-between ">
              <div className="floyd d-flex  ">
                <div className="green-circle"></div>
                <p className="floyd-name">Floyd Buckridge</p>
              </div>
              <div className="date">
                <p>Feb 03, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnEarnBlog;
