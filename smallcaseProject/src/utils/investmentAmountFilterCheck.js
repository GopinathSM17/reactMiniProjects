const investmentAmountFilterCheck = (filterData, filters) => {
    if (filters["investmentAmount"]) {

        if (filters["investmentAmount"] == "Any") {

        }
        else {
            filterData = filterData.filter((company) => {
                if (company["stats"]["minInvestAmount"] <= filters["investmentAmount"]) {
                    return true;
                }
                return false;
            })
        }
    }
    return filterData;
}

export default investmentAmountFilterCheck