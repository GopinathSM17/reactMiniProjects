const handleVolatilityClick = (volatilityValue, setFilters) => {
    setFilters((prev) => {
      let updatedVolatility = [...prev.Volatility];

      if (updatedVolatility.includes(volatilityValue.volatility)) {
        updatedVolatility = updatedVolatility.filter(
          (item) => item !== volatilityValue.volatility
        );
      } else {
        updatedVolatility.push(volatilityValue.volatility);
      }

      return {
        ...prev,
        Volatility: updatedVolatility,
      };
    });
  };

  export default handleVolatilityClick