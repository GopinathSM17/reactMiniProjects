const subscriptionTypeFilterCheck = (filterData, filters, data) => {
    if (filters["subscriptionType"]) {

        if (filters["subscriptionType"] === "Free access") {

            filterData = data.filter((company) => {
                if (!company["flags"]["private"]) {
                    return true;
                }
                return false;
            });
        }
        else if (filters["subscriptionType"] === "Show all") {
            filterData = data;
        }
        else if (filters["subscriptionType"] === "Fee based") {

            filterData = data.filter((company) => {
                if (company["flags"]["private"]) {
                    return true;
                }
                return false;
            });
        }
    }
    return filterData;
}
export default subscriptionTypeFilterCheck