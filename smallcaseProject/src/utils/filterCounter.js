const filterCounter = (filters) => {
    let currFilterCount = 0;
    if (filters["subscriptionType"] !== "Show all") {
      currFilterCount++;
    }
    if (filters["investmentAmount"] !== "Any") {
      currFilterCount++;
    }
    if (filters["launchDate"] !== "") {
      currFilterCount++;
    }
    currFilterCount += filters["Volatility"].length;
    currFilterCount += filters["investmentStrategy"].length;

    return currFilterCount;
  };

export default filterCounter