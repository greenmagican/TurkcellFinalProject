import { useTranslations } from "next-intl";
import "./marketbanner.scss";
import Image from "next/image";
const MarketBanner = () => {
  const tSlider = useTranslations("TodayMarket.Banner");
  return (

    <section className="bg-body-secondary">
      <div className="container">
        <div className="row py-5">
          <div className="col ">
            <div>
              <h1 className="fw-bold display-3">{tSlider("title")}</h1>
              <h3 className="text-body-tertiary">
                {tSlider("subtitle")}{" "}
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

export default MarketBanner;
