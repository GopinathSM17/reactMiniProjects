const handleVolatilityClick = (volatilityValue, setFilters) => {
  setFilters((prev) => {

    let updatedVolatility = new Set([...prev.Volatility]);

    if (updatedVolatility.has(volatilityValue.volatility)) {
      updatedVolatility.delete(volatilityValue.volatility)

    } else {
      updatedVolatility.add(volatilityValue.volatility);
    }

    return {
      ...prev,
      Volatility: updatedVolatility,
    };
  });
};

export default handleVolatilityClick