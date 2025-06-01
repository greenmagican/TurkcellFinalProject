import Image from "next/image";

const HowItWork = () => {
  return (
    <section className="bg-body-tertiary">
      <div className="container mt-5 p-5">
        <div className="text-center">
          <h2 className="fw-bold fs-1">How It Work</h2>
          <p className="fs-5 text-secondary">
            Stack is a production-ready library of stackable content blocks built
            in React Native
          </p>
        </div>

        <div className="row mt-5">
          <div className="col col-12 col-sm-12 col-md-3">
            <div className="d-flex flex-column align-items-center">
              <Image
                src="/assets/header/cloud.svg"
                alt="cloud"
                width={100}
                height={100}
              />
              <div className="text-center">
                <p className="text-secondary small">STEP 1</p>
                <p className="fs-4 fw-bold">Download</p>
                <p className="fs-5 text-secondary">
                  Stacks is a production-ready library of stackable content blocks
                  built in React Native.
                </p>
              </div>

            </div>
          </div>

          <div className="col col-12 col-sm-12 col-md-3 ">
            <div className="d-flex flex-column align-items-center">
              <Image
                src="/assets/header/wallet.png"
                alt="wallet"
                width={100}
                height={100}
              />
              <div className="text-center">

                <p className="small text-secondary">STEP 2</p>
                <p className="fs-4 fw-bold">Connect Wallet</p>
                <p className="fs-5 text-secondary">
                  Stacks is a production-ready library of stackable content blocks
                  built in React Native.
                </p></div>

            </div>
          </div>

          <div className="col col-12 col-sm-12 col-md-3">
            <div className="cloud d-flex flex-column align-items-center">
              <Image
                src="/assets/header/mining.png"
                alt="trading"
                width={100}
                height={100}
              />
              <div className="text-center">
                <p className="small text-secondary">STEP 3</p>
                <p className="fs-4 fw-bold">Start Trading</p>
                <p className="fs-5 text-secondary">
                  Stacks is a production-ready library of stackable content blocks
                  built in React Native.
                </p>
              </div>

            </div>
          </div>

          <div className="col col-12 col-sm-12 col-md-3">
            <div className="cloud d-flex flex-column align-items-center">
              <Image
                src="/assets/header/bit-coin.png"
                alt="bitcoin"
                width={100}
                height={100}
              />
              <div className="text-center">
                <p className="text-secondary small">STEP 4</p>
                <p className="fs-4 fw-bold">Earn Money</p>
                <p className="fs-5 text-secondary">
                  Stacks is a production-ready library of stackable content blocks
                  built in React Native.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div></section>

  );
};

export default HowItWork;
