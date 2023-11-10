import CostDate from './CostDate';
import Card from '../UI/Card';
import './CostItem.css';

const CostItem = (props) => {
  return (
    <Card className='cost-item'>
      <CostDate date={props.date} />
      <div className='cost-item__description'>
        <h2>{props.desc}</h2>
        <div className='cost-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default CostItem;
