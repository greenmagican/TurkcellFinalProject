"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { useTranslations } from "next-intl";
import MarketHeader from "@/components/molecules/MarketHeader/MarketHeader";
import TableHeaders from "@/components/molecules/TableHeaders/TableHeaders";
import { useMarketData } from "@/hooks/useMarketData";
import Button from "@/components/atoms/Button/Button";
import CoinInfo from "@/components/molecules/CoinInfo/CoinInfo";
import Input from "@/components/atoms/Input/Input";

const Market: React.FC = () => {

  const tMarket = useTranslations("Market");
  const { cryptoData, loading, error, searchTerm, setSearchTerm, selectedCategory } = useMarketData();

  const categories = [
    tMarket("tabs.view"),
    tMarket("tabs.meta"),
    tMarket("tabs.entertainment"),
    tMarket("tabs.energy"),
    tMarket("tabs.gaming"),
    tMarket("tabs.music"),
  ];
  return (
    <div className="container mt-4">
      <div>
        <MarketHeader tMarket={tMarket("header")}></MarketHeader>
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
          <div>
            {categories.map((category) => (
              <button
                key={category}
                className={`btn ${selectedCategory === category
                  ? "btn-primary"
                  : "btn-outline-secondary"
                  } rounded-pill me-2`}
              >
                {category}
              </button>
            ))}

          </div>
          <div className="input-group h-50 w-25 ">
            <Input
              type="text"
              className="form-control rounded-pill "
              placeholder={tMarket("search")}

              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn btn-link position-absolute pe-3 z-10 end-0"
              type="button"
            >
              <img
                src="https://img.icons8.com/?size=24&id=132&format=png&color=B1B5C3"
                alt=""
              />
            </button>
          </div>
        </div>
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table bg-dark align-middle">
              <TableHeaders tMarketName={tMarket("marketTable.name")} tMarketLast={tMarket("marketTable.last")}
                tMarketCap={tMarket("marketTable.cap")} tMarketDays={tMarket("marketTable.days")} ></TableHeaders>
              <tbody className="holas">
                {cryptoData.map((crypto) => (
                  <tr key={crypto.id}>
                    <td>{crypto.id}</td>
                    <td className="hola d-flex align-items-center gap-2">
                      <div>
                        <CoinInfo name={crypto.name} symbol={crypto.symbol} alt={crypto.name} id={crypto.id}></CoinInfo>
                      </div>
                    </td>
                    <td>
                      $
                      {crypto.lastPrice.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td
                      className={
                        crypto.change24h >= 0 ? "text-success" : "text-danger"
                      }
                    >
                      {crypto.change24h > 0 ? "+" : ""}
                      {crypto.change24h.toFixed(2)}%
                    </td>
                    <td>${(crypto.marketCap / 1000000000).toFixed(2)}B</td>
                    <td style={{ width: "120px" }}>
                      {crypto.sparkline && crypto.sparkline.length > 0 ? (
                        <Sparklines
                          data={crypto.sparkline}
                          limit={10}
                          width={80}
                          height={28}
                        >
                          <SparklinesLine
                            color="blue"
                            style={{ strokeWidth: 2, fill: "none" }}
                          />
                        </Sparklines>
                      ) : (
                        <span className="text-muted">No data</span>
                      )}
                    </td>
                    <td>
                      <Button className="btn btn-primary btn-sm rounded-pill">
                        {tMarket("marketTable.trade")}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Market;
