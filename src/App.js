import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";


const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      desc: "Холодильник",
      amount: 999.99
    },
    {
      date: new Date(2021, 11, 25),
      desc: "MacBook",
      amount: 1254.72
    },
    {
      date: new Date(2021, 3, 1),
      desc: "Джинсы",
      amount: 49.99
    }
  ];

  return (
    <div>
      <NewCost />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
