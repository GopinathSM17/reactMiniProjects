const handleVolatilityClick = (volatilityValue, setFilters) => {
    setFilters((prev) => {
      console.log(prev.Volatility);
      
      let updatedVolatility = new Set([...prev.Volatility]);

      if (updatedVolatility.has(volatilityValue.volatility)) {
        console.log("removing filters");
        
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