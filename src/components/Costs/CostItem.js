import React, { useState } from "react";
import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';

const CostItem = (props) => {
  const [desc, setDesc] = useState(props.desc);

  const changeDescHandler = () => {
    // меняет значение desc, но не вызывает функцию CostItem(props) для обновления контента на экране
    // desc = "new cost";

    // меняет desc и вызывает CostItem(props)
    setDesc("new cost");
    console.log(desc);
  }

  return (
    <Card className='cost-item'>
      <CostDate date={props.date} />
      <div className='cost-item__description'>
        <h2>{desc}</h2>
        <div className='cost-item__price'>${props.amount}</div>
      </div>
      <button onClick={changeDescHandler}>Изменить описание</button>
    </Card>
  );
}

export default CostItem;
