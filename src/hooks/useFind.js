import { useState } from "react";

const useFind = () => {
   const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    const {value} = event.target;

    if (value === "") {
      setFilterList(list);
      return;
    }
    
    const filteredValues = list.filter(item => item.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    setFilterList(filteredValues);
  }

  return {filterList, handleSearch}
}

export default useFind