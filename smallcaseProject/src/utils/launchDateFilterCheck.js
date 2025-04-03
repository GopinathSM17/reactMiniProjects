const launchDateFilterCheck = (filterData, filters)=>{
    if(filters["launchDate"] != ""){
        console.log(filters["launchDate"]); // "created"
        const date = new Date();
        const formattedDate = date.toISOString().split("T")[0];
        const firstDate = new Date(formattedDate);
        console.log(firstDate);
        
        filterData = filterData.filter((company) =>{
          const currentValue = company["info"]["created"];
          const currentDate =  currentValue.split("T")[0];
          const newDate = new Date(currentDate)
          
          const difference = firstDate.getFullYear() - newDate.getFullYear();
    
          if(difference > 1 ){
            return true;
          }
          return false;
        })
      }
      return filterData
}

export default launchDateFilterCheck;