"use client";
import Image from "next/image";
import "../SideBar/sidebar.scss";
import ChartInfos from "@/components/molecules/ChartInfos/ChartInfos";
import OrderBook from "@/components/molecules/OrderBook/OrderBook";
import OrderHistory from "@/components/molecules/OrderHistory/OrderHistory";
import PriceChange from "@/components/molecules/PriceChange/PriceChange";
import BuySellContainer from "../BuySellContainer/BuySellContainer";
import ChartComponent from "../ChartComponent/ChartComponent";
import NavBarDropdown from "../NavBarDropdown/NavBarDropdown";
import PairInfoContainer from "../PairInfo/PairInfoContainer";
import RecentTrades from "../RecentTrades/RecentTrades";
import SideBar from "../SideBar/SideBar";
import TradeNavBar from "../TradeNavBar/TradeNavBar";


const MarketDashboard = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <NavBarDropdown />
        <SideBar />
        <div className="col-12 col-sm-10 col-md-10">
          <TradeNavBar />
          <PairInfoContainer />
          <section className="chart">
            <div className="g-4 row">
              <div className="col col-lg-8 col-md-7 col-sm-12">
                <ChartInfos />
                <ChartComponent />
                <OrderHistory />
              </div>
              <BuySellContainer />
            </div>
          </section>
          <section className="orderbook-trades">
            <div className="row">
              <div className="col col-lg-4">
                <OrderBook />
              </div>
              <div className="col col-lg-4">
                <RecentTrades />
              </div>
              <div className="col col-lg-4">
                <PriceChange />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MarketDashboard;
