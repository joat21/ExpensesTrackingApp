import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2020, 2, 12),
    desc: "Холодильник",
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    desc: "MacBook",
    amount: 1254.72
  },
  {
    id: 'c3',
    date: new Date(2023, 3, 1),
    desc: "Джинсы",
    amount: 49.99
  },
  {
    id: 'c4',
    date: new Date(2021, 6, 27),
    desc: "Телефон",
    amount: 500
  }
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
