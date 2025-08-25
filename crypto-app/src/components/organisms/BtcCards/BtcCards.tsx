import React from 'react'
import Image from "next/image";
import Button from "../../atoms/Button/Button";
import BtcCard from '@/components/molecules/BtcCard/BtcCard';
const BtcCards = () => {

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

        <section className="btc-cards">
            <div className="container shadow rounded-4 ">
                <div className="row py-4">
                    <div className="d-flex gap-2 mb-4 flex-wrap">
                        {
                            categories.map((category) => (

                                <Button className={`category ${category === 'Crypto' ? 'btn btn-active btn-primary rounded-pill' : ' btn btn-outline-secondary rounded-pill'}`}
                                    key={category}> {category}</Button>

                            ))
                        }

                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                        <div className="card border-1 rounded-5 shadow-sm">
                            <BtcCard src="/assets/header/btc.svg" alt="Bitcoin"
                                title='Bitcoin' subtitle='BTC/USD' amount='46,168,95' price='36,641,20' change={-0.13} ></BtcCard>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                        <BtcCard src="/assets/header/eth.svg" alt="Ethereum"
                            title='Ethereum' subtitle='ETH/USD' amount='3.480.04' price='36,641,20' change={+10.55} ></BtcCard>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                        <BtcCard src='/assets/header/tether.svg' alt='Tether' title='Tether' subtitle='USDT/USD'
                            price='1.00' amount="34.44" change={-0.34}></BtcCard>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                        <BtcCard src='/assets/header/bnb.svg' alt='bnb' title='BNB' subtitle='BNB/USD'
                            price='443.56' amount="36.641.20" change={-1.24}></BtcCard>
                    </div>
                </div>

            </div>
        </section>


    )
}

export default BtcCards