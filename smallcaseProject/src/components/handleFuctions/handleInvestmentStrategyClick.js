const handleInvestmentStrategyClick = (investmentStrategyValue, setFilters) => {
    setFilters((prev) => {
      let updatedStrategy = [...prev.investmentStrategy];

      if (
        updatedStrategy.includes(investmentStrategyValue.investmentStrategy)
      ) {
        updatedStrategy = updatedStrategy.filter(
          (item) => item !== investmentStrategyValue.investmentStrategy
        );
      } else {
        updatedStrategy.push(investmentStrategyValue.investmentStrategy);
      }

      return {
        ...prev,
        investmentStrategy: updatedStrategy,
      };
    });
  };

export default handleInvestmentStrategyClick