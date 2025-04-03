const investmentStrategyFilterCheck = (filterData, filters) => {
  if (filters["investmentStrategy"].size > 0) {

    let investmentStrategySet = filters["investmentStrategy"];

    filterData = filterData.filter((company) => {
      const companyInvestmentStrategies = company["info"]["investmentStrategy"];
      let flag = false;
      if (companyInvestmentStrategies) {
        for (let element of companyInvestmentStrategies) {
          if (investmentStrategySet.has(element.displayName)) {
            flag = true;
            break;
          }
        }
      }
      return flag;
    });
  }
  return filterData
}

export default investmentStrategyFilterCheck