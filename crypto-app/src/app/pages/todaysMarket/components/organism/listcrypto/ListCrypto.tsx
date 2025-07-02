import React from "react";
import "./listcrypto.scss";
import Image from "next/image";
const ListCrypto = () => {


  const categories = [
    "Crypto",
    "Defi",
    "BSC",
    "NFT",
    "Polkadot",
    "Solana",
    "Opensea",
    "Makersplace",
  ];

  return (

    <div className="container shadow  rounded-4 ">
      <div className="row py-4">
        <div className="d-flex gap-2 mb-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`category ${category === 'Crypto' ? 'btn btn-active btn-primary rounded-pill' : ' btn btn-outline-secondary rounded-pill'}`}
            >
              {category}
            </button>
          ))}

        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
          <div className="card border-1 rounded-5 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <Image
                  className=""
                  src="/assets/header/btc.svg"
                  alt="Ethereum"
                  width={24}
                  height={24}
                />
                <h6 className="market-title mx-2 mt-2 fw-bold ">Bitcoin </h6>
                <p className="text-secondary small mt-3">BTC/USD</p>
              </div>
              <div className="d-flex flex-column">
                <div className="my-3">
                  <h4 className="fw-bold">USD 46,168.95</h4>
                </div>
                <div className="d-flex align-items-center">
                  <div>36,641,20</div>
                  <div className="badge bg-danger rounded-pill text-center ms-2 ">-0.79</div>
                </div>


              </div>


            </div>

          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
          <div className="card border-1 rounded-5 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <Image
                  className=""
                  src="/assets/header/eth.svg"
                  alt="Ethereum"
                  width={24}
                  height={24}
                />
                <h6 className="market-title mx-2 mt-2 fw-bold ">Ethereum </h6>
                <p className="text-secondary small mt-3">ETH/USD</p>
              </div>
              <div className="d-flex flex-column">
                <div className="my-3">
                  <h4 className="fw-bold">USD $3,480.04</h4>
                </div>

                <div className="d-flex align-items-center">
                  <div>36,641,20</div>
                  <div className="badge bg-success rounded-pill text-center ms-2 ">+10.55%</div>
                </div>


              </div>


            </div>

          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
          <div className="card border-1 rounded-5 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <Image
                  className=""
                  src="/assets/header/tether.svg"
                  alt="Ethereum"
                  width={24}
                  height={24}
                />
                <h6 className="market-title mx-2 mt-2 fw-bold ">Tether </h6>
                <p className="text-secondary small mt-3">USDT/USD</p>
              </div>
              <div className="d-flex flex-column">
                <div className="my-3"><h3 className="fw-bold">USD 1.00</h3></div>

                <div className="d-flex align-items-center">
                  <div>36,641,20</div>
                  <div className="badge bg-danger rounded-pill text-center ms-2 ">-0.01%</div>
                </div>


              </div>


            </div>

          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
          <div className="card border-1 rounded-5 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <Image
                  className=""
                  src="/assets/header/bnb.svg"
                  alt="Ethereum"
                  width={24}
                  height={24}
                />
                <h6 className="market-title mx-2 mt-2 fw-bold ">BNB </h6>
                <p className="text-secondary small mt-3">BNB/USD</p>
              </div>
              <div className="d-flex flex-column">
                <div className="my-3"><h4 className="fw-bold">USD 443.56</h4></div>

                <div className="d-flex align-items-center">
                  <div>36,641,20</div>
                  <div className="badge bg-danger rounded-pill text-center ms-2 ">-1.24%</div>
                </div>


              </div>


            </div>

          </div>
        </div>


      </div>

    </div>
  )
};

export default ListCrypto;
