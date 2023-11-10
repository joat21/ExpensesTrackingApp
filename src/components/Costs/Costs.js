import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFIlter";
import React, { useState } from "react";
import "./Costs.css";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const changeYearHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={changeYearHandler}/>

      {props.costs.map(cost =>
        <CostItem
          date={cost.date}
          desc={cost.desc}
          amount={cost.amount}
        />
      )}
    </Card>
  );
}

export default Costs;
