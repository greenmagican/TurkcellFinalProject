import React from "react";
import Image from "next/image";

const About = () => {
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
            <h2 className="fw-bold fs-1">What is Rockie</h2>
            <p className="text-secondary fs-5">
              Experience a variety of trading on Bitcost. You can use various
              types of coin transactions such as Spot Trade, Futures Trade, P2P,
              Staking, Mining, and margin.
            </p>
            <h5 className="fw-bold">
              <Image
                src="/assets/header/mavitik.svg"
                alt="mavitik"
                height={20}
                width={20}
              ></Image>
              View real-time cryptocurrency prices
            </h5>
            <p className="text-secondary fs-6">
              Experience a variety of trading on Bitcost. You can use various
              types of coin transactions such as Spot Trade, Futures Trade, P2P,
              Staking, Mining, and margin.
            </p>
            <h5 className="fw-bold ">
              <Image
                src="/assets/header/mavitik.svg"
                alt="mavitik"
                height={20}
                width={20}
              ></Image>
              Buy and sell BTC, ETH, XRP, OKB, Etc...
            </h5>
            <p className="text-secondary fs-6">
              Experience a variety of trading on Bitcost. You can use various
              types of coin transactions such as Spot Trade, Futures Trade, P2P,
              Staking, Mining, and margin.
            </p>
            <button className="btn btn-primary rounded-pill mt-4">
              Explore More
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;
