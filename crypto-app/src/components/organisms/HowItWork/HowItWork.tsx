import Step from "@/components/molecules/Steps/Step";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HowItWork = () => {
  const tHowItWork = useTranslations("HowItWork");
  return (
    <section className="bg-body-tertiary">
      <div className="container mt-5 p-5">
        <div className="text-center">
          <h2 className="fw-bold fs-1">{tHowItWork("header")}</h2>
          <p className="fs-5 text-secondary">
            {tHowItWork("subheader")}</p>
        </div>
        <div className="row mt-5">
          <div className="col col-12 col-sm-12 col-md-3">
            <Step header={tHowItWork("step1.header")} name={tHowItWork("step1.name")}
              exp={tHowItWork("step1.exp")} image="/assets/header/cloud.svg"></Step>
          </div>
          <div className="col col-12 col-sm-12 col-md-3 ">
            <Step header={tHowItWork("step2.header")} name={tHowItWork("step2.name")}
              exp={tHowItWork("step2.exp")} image="/assets/header/wallet.png"></Step>
          </div>
          <div className="col col-12 col-sm-12 col-md-3">
            <Step header={tHowItWork("step3.header")} name={tHowItWork("step3.name")}
              exp={tHowItWork("step3.exp")} image="/assets/header/mining.png"></Step>
          </div>
          <div className="col col-12 col-sm-12 col-md-3">
            <Step header={tHowItWork("step4.header")} name={tHowItWork("step4.name")}
              exp={tHowItWork("step4.exp")} image="/assets/header/bit-coin.png"></Step>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWork;
