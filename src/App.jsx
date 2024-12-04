import React from "react";
import styles from "./styles.module.css";
import useFind from "./hooks/useFind";

const App = () => {
   const {filterList, handleSearch} = useFind()

   return <div className={`${styles.app}`}>
      <div>
         Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
         filterList.map((item, index) => (
            <div key={index}>{item}</div> //Display each item
         ))}
      </div>
}

export default App;