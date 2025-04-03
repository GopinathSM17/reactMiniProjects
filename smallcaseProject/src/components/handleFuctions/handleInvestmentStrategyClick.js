const handleInvestmentStrategyClick = (investmentStrategyValue, setFilters) => {
    setFilters((prev) => {
      let updatedStrategy =new Set([...prev.investmentStrategy]);

      if(updatedStrategy.has(investmentStrategyValue.investmentStrategy)){
        updatedStrategy.delete(investmentStrategyValue.investmentStrategy);
      }
      else{
        updatedStrategy.add(investmentStrategyValue.investmentStrategy);
      }

      return {
        ...prev,
        investmentStrategy: updatedStrategy,
      };
    });
  };

export default handleInvestmentStrategyClick