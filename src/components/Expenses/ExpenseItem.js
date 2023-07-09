//Stateless component as it should be. It is a component that does not manage state. It only receives data and renders it.
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
import React, { useState } from "react";

function ExpenseItem(props1) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props1.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props1.title}</h2>
        <div className="expense-item__price">{props1.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;