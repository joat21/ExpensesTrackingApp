import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";

const Costs = (props) => {
  return (
    <Card className="costs">
      <CostItem
        date={props.costs[0].date}
        desc={props.costs[0].desc}
        amount={props.costs[0].amount}
      />
      <CostItem
        date={props.costs[1].date}
        desc={props.costs[1].desc}
        amount={props.costs[1].amount}
      />
      <CostItem
        date={props.costs[2].date}
        desc={props.costs[2].desc}
        amount={props.costs[2].amount}
      />
    </Card>
  );
}

export default Costs;
