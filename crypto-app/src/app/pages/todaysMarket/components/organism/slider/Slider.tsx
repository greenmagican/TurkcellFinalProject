import "./slider.scss";
import Image from "next/image";
const Slider = () => {
  return (

    <section className="bg-body-secondary">
      <div className="container">
        <div className="row py-5">
          <div className="col ">
            <div>
              <h1 className="fw-bold display-3">Today's Cryptocurrency prices</h1>
              <h3 className="text-body-tertiary">
                The global crypto market cap is{" "}
                <span className="fw-bold text-dark">$1.86T</span>
              </h3>
            </div>
          </div>
          <div className="col d-md-flex justify-content-end d-none col mb-5">
            <Image
              src="/assets/header/marketimg.svg"
              alt="marketimg"
              height={338.93}
              width={478}
            ></Image>

          </div>
        </div>
      </div>

    </section>

  );
};

export default Slider;
