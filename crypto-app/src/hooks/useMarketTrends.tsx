
import { useEffect, useState } from 'react'

export interface Coin {
    id: number;
    symbol: string;
    name: string;
    high_24h: string;
    low_24h: string;
    turnover_24h: string;
    change_24h: string;
    sparkline?: number[];
}

const useMarketTrends = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await fetch("/api/market");

                if (!res.ok) {
                    throw new Error(`API error: ${res.status}`);
                }

                const data = await res.json();

                setCoins(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to load market data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchCoins();
    }, []);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };
    const filteredBySearch = coins.filter(
        (crypto) =>
            crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const sortedCryptos = [...filteredBySearch].sort((a, b) => {
        if (!selectedCategory) return 0;

        let valueA, valueB;

        switch (selectedCategory) {
            case "24h High":
                valueA = parseFloat(a.high_24h);
                valueB = parseFloat(b.high_24h);
                break;
            case "24h Low":
                valueA = parseFloat(a.low_24h);
                valueB = parseFloat(b.low_24h);
                break;
            case "24h Change":
                valueA = parseFloat(a.change_24h);
                valueB = parseFloat(b.change_24h);
                break;
            case "24h Volume":
                valueA = parseFloat(a.turnover_24h);
                valueB = parseFloat(b.turnover_24h);
                break;
            default:
                return 0;
        }

        return valueB - valueA;
    });


    return {
        handleCategoryChange,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        coins: filteredBySearch,
        loading,
        sortedCryptos,
        error
    }
}

export default useMarketTrends  