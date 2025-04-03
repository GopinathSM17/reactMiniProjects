const handleLaunchDateClick = (setFilters) => {
    // console.log("launch date checkbox clicked");

    const valurToAdd = { launchDate: "created" };
    setFilters((prev) => {
      let updated = {
        ...prev,
        ...valurToAdd,
      };
      return updated;
    });
  };

  export default handleLaunchDateClick