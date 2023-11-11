import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputDesc, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   amount: '',
  //   date: ''
  // });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   name: event.target.value,
    // })

    // Обновление состояния, зависящего от предыдущего состояния
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: event.target.value
    //   }
    // })
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      desc: inputDesc,
      amount: inputAmount,
      date: new Date(inputDate)
    };

    props.onSaveCostData(costData);

    setInputName('');
    setInputAmount('');
    setInputDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={inputDesc} onChange={nameChangeHandler}/>
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input type="number" min="0.01" step="0.01" value={inputAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input type="date" min="2023-01-01" max="2023-12-31" value={inputDate} onChange={dateChangeHandler}/>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="button" onClick={props.onCancel}>Отмена</button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;
