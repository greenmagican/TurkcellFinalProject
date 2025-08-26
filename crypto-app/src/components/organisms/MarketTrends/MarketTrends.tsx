"use client";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import CoinRow from "@/components/molecules/CoinRow/CoinRow";
import TrendsDropdown from "@/components/molecules/TrendsDropdown/TrendsDropdown";
import useMarketTrends from "@/hooks/useMarketTrends";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslations } from "next-intl";


const MarketTrends = () => {

  const tMarketTrends = useTranslations("TodayMarket.TrendTable");

  const { sortedCryptos, setSearchTerm, searchTerm, selectedCategory, loading, error } = useMarketTrends();

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ maxWidth: "400px" }}>
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search"></i>
          </span>
          <Input
            type="text"
            className="form-control border-start-0"
            placeholder={tMarketTrends("search")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <TrendsDropdown />
      </div>

      <h2 className="mb-4">{tMarketTrends("title")}</h2>
      <div className="table-responsive">
        <table className="table bg-dark table-hover">
          <thead>
            <tr className="table-active">
              <th scope="col">Coin</th>
              <th
                scope="col"
                className={
                  selectedCategory === "24h High"
                    ? "text-primary fw-bold fs-5"
                    : ""
                }
              >
                {tMarketTrends("high")} {selectedCategory === "24h High" && "↓"}
              </th>
              <th
                scope="col"
                className={
                  selectedCategory === "24h Low"
                    ? "text-primary fw-bold fs-5"
                    : ""
                }
              >
                {tMarketTrends("low")} {selectedCategory === "24h Low" && "↓"}
              </th>
              <th
                scope="col"
                className={
                  selectedCategory === "24h Change"
                    ? "text-primary fw-bold fs-5"
                    : ""
                }
              >
                {tMarketTrends("change")} {selectedCategory === "24h Change" && "↓"}
              </th>
              <th
                scope="col"
                className={
                  selectedCategory === "24h Volume"
                    ? "text-primary fw-bold fs-5"
                    : ""
                }
              >
                {tMarketTrends("volume")} {selectedCategory === "24h Volume" && "↓"}
              </th>
              <th scope="col">{tMarketTrends("graph")}</th>
              <th scope="col">{tMarketTrends("action")}</th>
            </tr>
          </thead>
          <tbody>
            {sortedCryptos.map((coin) => (
              <CoinRow coin={coin} tMarketTrends={tMarketTrends("trade")} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketTrends;
