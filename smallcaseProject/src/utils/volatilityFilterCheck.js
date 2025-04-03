const volatilityFilteCheck = (filterData, filters) => {
    if (filters["Volatility"].size > 0) {
        filterData = filterData.filter((company ) => filters["Volatility"].has(company.stats.ratios.riskLabel))
    }
    return filterData
}

export default volatilityFilteCheck