import Button from '@/components/atoms/Button/Button'
import useMarketTrends from '@/hooks/useMarketTrends';
import { useTranslations } from 'next-intl';

const TrendsDropdown: React.FC = () => {
    const { handleCategoryChange, selectedCategory } = useMarketTrends();
    const tMarketTrends = useTranslations("TodayMarket.TrendTable");

    return (
        <div className="dropdown">
            <Button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {selectedCategory != "Mix"
                    ? `Sort by: ${selectedCategory} ${tMarketTrends("ascending")}`
                    : "Sort by"}
            </Button>
            <ul className="dropdown-menu">
                <li>
                    <Button
                        className="dropdown-item"
                        onClick={() => handleCategoryChange("24h High")}
                    >
                        {tMarketTrends("high")} {selectedCategory === "24h High" && "↓"}
                    </Button>
                </li>
                <li>
                    <Button
                        className="dropdown-item"
                        onClick={() => handleCategoryChange("24h Low")}
                    >
                        {tMarketTrends("low")}{selectedCategory === "24h Low" && "↓"}
                    </Button>
                </li>
                <li>
                    <Button
                        className="dropdown-item"
                        onClick={() => handleCategoryChange("24h Change")}
                    >
                        {tMarketTrends("change")} {selectedCategory === "24h Change" && "↓"}
                    </Button>
                </li>
                <li>
                    <Button
                        className="dropdown-item"
                        onClick={() => handleCategoryChange("24h Volume")}
                    >
                        {tMarketTrends("volume")} {selectedCategory === "24h Volume" && "↓"}
                    </Button>
                </li>
                <Button
                    className="dropdown-item"
                    onClick={() => handleCategoryChange("Mix")}
                >
                    Mix {selectedCategory === "Mix" && "-"}
                </Button>
            </ul>
        </div>
    )
}

export default TrendsDropdown