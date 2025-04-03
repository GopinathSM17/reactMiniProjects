const investmentStrategyFilterCheck = (filterData, filters) =>{
    if(filters["investmentStrategy"].length > 0){

        let investmentStrategyArr = filters["investmentStrategy"];
    
        filterData = filterData.filter((company)=>{
          const companyInvestmentStrategies = company["info"]["investmentStrategy"];
          let flag = false;
          if(companyInvestmentStrategies){
            companyInvestmentStrategies.forEach(element => {
              if(investmentStrategyArr.includes(element.displayName)){
                flag = true;
                return flag
              }
            });
          }
          return flag;
        })
      }
      return filterData
}

export default investmentStrategyFilterCheck