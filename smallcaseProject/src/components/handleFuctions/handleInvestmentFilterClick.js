
const handleInvestmentFilterClick = (filterValue, setFilters) => {
    
    setFilters((prev) => {
      let updated = {
        ...prev,
        ...filterValue,
      };
      return updated;
    });
  };

  export default handleInvestmentFilterClick