import AssetCardElement from "@/components/atoms/AssetCardElement/AssetCardElement";
import AssetCard from "@/components/molecules/AssetCard/AssetCard";
import { useTranslations } from "use-intl"

const BalanceContainer = () => {

    const tBalanceContainer = useTranslations("MarketDashboard.BalanceContainer");
    return (
        <div className="card border-1 p-5 mt-5 ">
            <div className="card-title text-center ">
                <h3 className="text-secondary fw-bold">{tBalanceContainer("balance")}</h3>
                <h1 className="fw-bold amount">$132,832,89</h1>
                <div
                    className="btn btn-outline-dark rounded-pill w-100 mt-3"
                    typeof="button"
                >
                    {" "}
                    <span className="fw-bold">+ {tBalanceContainer("topup")}</span>
                </div>
            </div>
            <div className="card-body">
                <div className="assets-bar d-flex justify-content-between mb-3">
                    <h3 className="fw-bold amount">{tBalanceContainer("assets")}</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-search"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                </div>
                <AssetCard />
            </div>
        </div>
    )

}

export default BalanceContainer