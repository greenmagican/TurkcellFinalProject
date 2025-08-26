import React from "react";
import "./listcrypto.scss";
import BtcCard from "@/components/molecules/BtcCard/BtcCard";
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
          <BtcCard src="/assets/header/btc.svg" alt="btc" title="Bitcoin" subtitle="BTC/USD" price="46.168.95"
            amount="36.641.20" change={-0.79}></BtcCard>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
          <BtcCard src="/assets/header/eth.svg" alt="eth" title="Ethereum" subtitle="ETH/USD" price="3.480.04"
            amount="36.641.20" change={+10.55}></BtcCard>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
          <BtcCard src="/assets/header/tether.svg" alt="tether" title="Tether" subtitle="USDT/USD" price="1.00"
            amount="36.641.20" change={-0.01}></BtcCard>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
          <BtcCard src="/assets/header/bnb.svg" alt="bnb" title="BNB" subtitle="BNB/USD" price="443.56"
            amount="36.641.20" change={-1.24}></BtcCard>
        </div>
      </div>
    </div>
  )
};

export default ListCrypto;
