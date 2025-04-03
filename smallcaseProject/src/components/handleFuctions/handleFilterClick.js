

const handleFilterClick = (filterValue, setSelectedSubscription, setFilters) => {
    setSelectedSubscription(filterValue.subscriptionType);

    setFilters((prev) => {
      let updated = {
        ...prev,
        ...filterValue,
      };
      return updated;
    });
  };

  export default handleFilterClick