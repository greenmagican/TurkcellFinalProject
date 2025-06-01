import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className="bg-body-tertiary">  <div className="container p-5">
      <div className="row">
        <div className="col">
          <h2 className="fw-bold fs-1">
            Free your money & Invest with confident
          </h2>
          <p className="text-secondary fs-5">
            With Cryptor Trade, you can be sure your trading skills are
            matched
          </p>
          <h5 className="fw-bold">
            <Image
              src="/assets/header/mavitik.svg"
              alt="mavitik"
              height={20}
              width={20}
            ></Image>
            Buy, Sell, And Trade On The Go
          </h5>
          <p className="text-secondary fs-6">
            Managa your holdings from your mobile decive
          </p>
          <h5 className="fw-bold ">
            <Image
              src="/assets/header/mavitik.svg"
              alt="mavitik"
              height={20}
              width={20}
            ></Image>
            Take Control Of Your Wealth
          </h5>
          <p className="text-secondary fs-6">
            Rest assured you (and only you) have access to your funds
          </p>
          <div className="googleappstore d-flex ">
            <span className="badge">
              <Image
                src="/assets/header/googleplay.svg"
                alt="googleplay"
                width={135}
                height={40}
              ></Image>
            </span>
            <span className="badge">
              <Image
                src="/assets/header/appstore.svg"
                alt="appstore"
                width={120}
                height={40}
              ></Image>
            </span>
          </div>
        </div>
        <div className="col d-md-flex d-none ms-5">
          <Image
            src="/assets/header/download.svg"
            width={500}
            height={500}
            alt="downloadphone"
            className="w-full max-w-[456px] h-auto"
          ></Image>
        </div>
      </div>

    </div></section>

  );
};

export default DownloadApp;
