import React, { useEffect, useState } from 'react'

export const useMarketData = () => {


    interface CryptoData {
        id: number;
        name: string;
        symbol: string;
        lastPrice: number;
        change24h: number;
        marketCap: number;
        sparkline?: number[];
    }


    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState("View All");
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/homepagemarket");
                const data = await res.json();
                console.log("API response", data);
                const coins = Array.isArray(data) ? data : data.data;
                const formattedData: CryptoData[] = coins.slice(0, 10).map((coin: any, index: number) => ({
                    id: (index + 1).toString(),
                    name: coin.name,
                    symbol: coin.symbol,
                    lastPrice: coin.quote.USD.price,
                    change24h: coin.quote.USD.price,
                    marketCap: coin.quote.USD.market_cap,
                    sparkline: [5, 10, 7, 12, 6, 7, 10],
                }));
                setCryptoData(formattedData);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch crypto data:", err);
                setError("Failed to load cryptocurrency data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchCryptoData();
    }, []);

    const filteredCryptos = cryptoData.filter(
        (crypto) =>
            crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        cryptoData: filteredCryptos,
        loading,
        error,
    };
}

export default useMarketData