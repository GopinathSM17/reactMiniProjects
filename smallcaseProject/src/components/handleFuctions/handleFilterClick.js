

const handleFilterClick = (filterValue, setFilters) => {

    setFilters((prev) => {
      let updated = {
        ...prev,
        ...filterValue,
      };
      return updated;
    });
  };

  export default handleFilterClick