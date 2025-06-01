"use client";
import Image from "next/image";
import "./sidebar.scss";
import ChartComponent from "../../chart/ChartComponent";
import OrderBook from "./OrderBook";
import RecentTrades from "./RecentTrades";
import PriceChange from "./PriceChange";
import TradeNavBar from "./TradeNavBar";
import PairInfoContainer from "./PairInfoContainer";
import OrderHistory from "./OrderHistory";
import ChartInfos from "../../chart/ChartInfos";
import SideBar from "./SideBar";
import BuySellContainer from "./BuySellContainer";
import NavBarDropdown from "./NavBarDropdown";

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
