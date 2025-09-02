import Button from '@/components/atoms/Button/Button';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'

const useOrderHistory = () => {

    const [activeTab, setActiveTab] = useState("tab1");
    const tOrderHistory = useTranslations("MarketDashboard.OrderHistory")

    return (
        <div className="left-buttons ">
            <ul className="nav-underline nav gap-5 ">
                <li className="nav-item">
                    <Button
                        className={`nav-link ${activeTab === "tab1" ? "active" : ""
                            }`}
                        onClick={() => setActiveTab("tab1")}
                    >
                        <h5>{tOrderHistory("openOrders")}</h5>
                    </Button>
                </li>
                <li className="nav-item">
                    <Button
                        className={`nav-link ${activeTab === "tab2" ? "active" : ""
                            }`}
                        onClick={() => setActiveTab("tab2")}
                    >
                        <h5>{tOrderHistory("closedOrders")}</h5>
                    </Button>
                </li>
                <li className="nav-item">
                    <Button
                        className={`nav-link ${activeTab === "tab3" ? "active" : ""
                            }`}
                        onClick={() => setActiveTab("tab3")}
                    >
                        <h5>{tOrderHistory("closedOrders")}</h5>
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default useOrderHistory