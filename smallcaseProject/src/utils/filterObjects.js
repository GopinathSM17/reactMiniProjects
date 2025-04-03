
export const initialFiltersObject = {
    subscriptionType: "Show all",
    investmentAmount: "Any",
    Volatility: new Set(),
    investmentStrategy: [],
    launchDate: "",
    sortType: "popularity",
    orderBy: "asce",
}


export const subscriptionType = ["Show all", "Free access", "Fee based"];

export const investmentAmount = [
    { id: "Any", value: "Any" },
    { id: "Under $ 5,000", value: 5000 },
    { id: "Under $ 25,000", value: 25000 },
    { id: "Under $ 50,000", value: 50000 },
];

export const volatility = [
    { id: "Low Volatility" },
    { id: "Medium Volatility" },
    { id: "High Volatility" },
];

export const investmentStrategy = [
    { id: "Asset Allocation" },
    { id: "Corporate Governance" },
    { id: "Dividend" },
    { id: "ESG" },
    { id: "Factor Investing" },
    { id: "Goal Based" },
    { id: "Growth" },
    { id: "Momentum" },
    { id: "Quality" },
    { id: "Qunatamental" },
    { id: "Quantitative" },
    { id: "Sector Tracker" },
    { id: "Technical" },
    { id: "Thematic" },
    { id: "Value" },
];
