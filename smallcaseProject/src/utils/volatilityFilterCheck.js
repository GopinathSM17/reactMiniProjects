const volatilityFilteCheck = (filterData, filters) => {
    if (filters["Volatility"].length > 0) {

        let volatilityArr = filters["Volatility"];

        filterData = filterData.filter((company) => {
            return volatilityArr.includes(company.stats.ratios.riskLabel);
        })
    }
    return filterData
}

export default volatilityFilteCheck